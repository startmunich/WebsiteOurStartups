import { NextResponse } from 'next/server';

import { getAllStartups } from '@/lib/startups';

export const revalidate = 3600;

export async function GET() {
  try {
    const companies = await getAllStartups();
    return NextResponse.json(companies);
  } catch (error) {
    console.error('Error fetching from NocoDB:', error);
    return NextResponse.json({ error: 'Failed to fetch startups from database' }, { status: 500 });
  }
}
