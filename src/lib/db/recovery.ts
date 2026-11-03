import fs from 'fs';
import path from 'path';
import { prisma } from './prisma';
import { BusinessStage, ContactMethod } from '@prisma/client';

export interface BackupEnquiryRecord {
  id: string;
  timestamp: string;
  data: Record<string, unknown>;
  status: 'SAVED_TO_DB' | 'DB_FALLBACK_PENDING';
}

const BACKUP_FILE_PATH = path.join(process.cwd(), 'data', 'enquiries-backup.jsonl');

/**
 * Ensures an immutable local backup of all enquiries is preserved on disk,
 * preventing data loss even if the primary database is momentarily unreachable.
 */
export async function appendEnquiryBackup(enquiryId: string, data: Record<string, unknown>, savedToDb: boolean) {
  try {
    const dir = path.dirname(BACKUP_FILE_PATH);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const record: BackupEnquiryRecord = {
      id: enquiryId,
      timestamp: new Date().toISOString(),
      data,
      status: savedToDb ? 'SAVED_TO_DB' : 'DB_FALLBACK_PENDING',
    };

    fs.appendFileSync(BACKUP_FILE_PATH, JSON.stringify(record) + '\n', 'utf8');
  } catch (error) {
    console.error('Failed to write enquiry to local backup file:', error);
  }
}

/**
 * Automatically syncs any pending offline/fallback enquiries from the backup file
 * into PostgreSQL as soon as the database is online.
 */
export async function syncPendingBackupEnquiries(): Promise<number> {
  try {
    if (!fs.existsSync(BACKUP_FILE_PATH)) return 0;
    const lines = fs.readFileSync(BACKUP_FILE_PATH, 'utf8').split('\n').filter(Boolean);
    let updatedAny = false;
    let syncedCount = 0;

    const updatedLines: string[] = [];

    for (const line of lines) {
      try {
        const record = JSON.parse(line) as BackupEnquiryRecord;
        if (record.status === 'DB_FALLBACK_PENDING') {
          const d = record.data;
          const refId = record.id;

          let stageEnum: BusinessStage = BusinessStage.IDEA;
          if (d.businessStage === 'NEW_BUSINESS') stageEnum = BusinessStage.NEW_BUSINESS;
          if (d.businessStage === 'EXISTING_BUSINESS') stageEnum = BusinessStage.EXISTING_BUSINESS;

          let contactEnum: ContactMethod = ContactMethod.ANY;
          if (d.preferredContact === 'EMAIL') contactEnum = ContactMethod.EMAIL;
          if (d.preferredContact === 'PHONE') contactEnum = ContactMethod.PHONE;
          if (d.preferredContact === 'WHATSAPP') contactEnum = ContactMethod.WHATSAPP;

          await prisma.enquiry.upsert({
            where: { referenceId: refId },
            update: {},
            create: {
              referenceId: refId,
              fullName: (d.fullName as string) || 'Guest Lead',
              email: (d.email as string) || 'guest@example.com',
              phone: (d.phone as string) || 'N/A',
              businessStage: stageEnum,
              departmentSlug: (d.departmentSlug as string) || 'business-launch',
              serviceSlug: (d.serviceSlug as string) || null,
              packageSlug: (d.packageSlug as string) || null,
              businessName: (d.businessName as string) || null,
              city: (d.city as string) || null,
              country: (d.country as string) || null,
              message: (d.message as string) || '',
              preferredContact: contactEnum,
              consentAccepted: Boolean(d.consentAccepted),
              sourcePath: (d.sourcePath as string) || '/get-started',
              status: 'NEW',
              createdAt: new Date(record.timestamp || Date.now()),
            },
          });

          record.status = 'SAVED_TO_DB';
          updatedAny = true;
          syncedCount++;
        }
        updatedLines.push(JSON.stringify(record));
      } catch {
        updatedLines.push(line);
      }
    }

    if (updatedAny) {
      fs.writeFileSync(BACKUP_FILE_PATH, updatedLines.join('\n') + '\n', 'utf8');
      console.log(`[Auto-Recovery] Synced ${syncedCount} pending backup enquiries into PostgreSQL.`);
    }

    return syncedCount;
  } catch (err) {
    console.warn('[Auto-Recovery] Notice checking backup enquiries:', err);
    return 0;
  }
}

/**
 * Reads local backup file records for admin audit or recovery.
 */
export function getLocalEnquiryBackups(): BackupEnquiryRecord[] {
  try {
    if (!fs.existsSync(BACKUP_FILE_PATH)) {
      return [];
    }
    const lines = fs.readFileSync(BACKUP_FILE_PATH, 'utf8').split('\n').filter(Boolean);
    return lines.map((line) => JSON.parse(line));
  } catch (error) {
    console.error('Failed to read local enquiry backup file:', error);
    return [];
  }
}
