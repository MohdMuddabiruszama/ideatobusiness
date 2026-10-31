import fs from 'fs';
import path from 'path';

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

