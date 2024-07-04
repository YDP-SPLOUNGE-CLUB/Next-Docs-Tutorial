import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

export default function ServerRedirect() {

  const code = `
  import { NextRequest, NextResponse, userAgent } from 'next/server';

    export function middleware(request: NextRequest) {
      const { device } = userAgent(request);
      const viewport = device.type;
    
      if (viewport === 'mobile' || viewport === 'tablet') {
        return NextResponse.redirect(new URL('/m', request.nextUrl));
      }
      return NextResponse.next();
    }
    
    export const config = {
      matcher: [
        '~~path'
      ],
    };
  `

  return (
    <div>
      예시 코드
      <CodeSnippet codeString={code} />
    </div>
  )
}