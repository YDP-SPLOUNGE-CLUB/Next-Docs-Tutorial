import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const response = NextResponse.json({ message: 'Hello, world!' });
  response.headers.set('Cache-Control', 's-maxage=1, stale-while-revalidate');
  return response;
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  return NextResponse.json({ message: 'Data received', data });
}
