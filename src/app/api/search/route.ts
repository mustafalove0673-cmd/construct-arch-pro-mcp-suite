import { NextResponse } from "next/server";
import ZAI from 'z-ai-web-dev-sdk';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';
  const zai = await ZAI.create();
  const results = await zai.functions.invoke('web_search', { query: q, num: 10 });
  return NextResponse.json(results);
}
