import { NextResponse } from 'next/server';
import { submitEnquiry } from '@/lib/actions/enquiry';
import { enquiryFormSchema } from '@/lib/validation/schemas';

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const result = await submitEnquiry(json);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error, fieldErrors: result.fieldErrors },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, enquiryId: result.enquiryId }, { status: 201 });
  } catch (error) {
    console.error('API /enquiries error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

