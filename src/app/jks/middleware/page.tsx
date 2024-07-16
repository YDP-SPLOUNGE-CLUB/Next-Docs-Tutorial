import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

export default function MiddleWarePage() {

  const MiddleWareCost = `
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
      /// path~~
    ],
  };
  `

  return (
    <div>
      <div>미들웨어를 통해서 Redirect 를 사용할 수 있습니다. 저는 모바일을 인식을 해서 미들웨어를 통해 리다이렉트를 시켜본 경험이 있습니다.</div>
      <CodeSnippet codeString={MiddleWareCost} />
    </div>
  )
}