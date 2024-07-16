'use client';
import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";
import {useRouter} from "next/navigation";

export default function UseRouterPage() {
  const router = useRouter();

  const exampleCode = `
    'use client';
    import {useRouter} from "next/navigation";
    
    export default function UseRouterPage() {
      const router = useRouter();
       return (
        <div>
          this useRouter Page.
          <CodeSnippet codeString={exampleCode} />
        </div>
      )
    }
  `

  return (
    <div>
      this useRouter Page.
      <CodeSnippet codeString={exampleCode} />
      <button onClick={() => router.push('useRouter/move')}>새 페이지</button>
    </div>
  )
}