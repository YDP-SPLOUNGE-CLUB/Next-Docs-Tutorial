import React from 'react';
import style from '@/common/style/jks/index.module.scss';
import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

const UseRouterComponent = () => {

  const useRouterCode = `
    'use client'
   
    import { useRouter } from 'next/navigation'
     
    export default function Page() {
      const router = useRouter()
     
      return (
        <button type="button" onClick={() => router.push('/dashboard')}>
          Dashboard
        </button>
      )
    }
  `

  return (
    <>
      <div className={style.header}>
        <h1>useRouter() Hook</h1>
      </div>
      <div className={style.content}>
        <p>클라이언트 사이드에서 사용 가능한 useRouter() 훅을 사용하여도 경로를 변경 가능합니다.</p>
        <CodeSnippet codeString={useRouterCode} />
        <p>{`주의해야 할 점은 클라이언트 사이드에서 작동하기 떄문에 'use client' 문구를 페이지 최상단에 붙여야 합니다.`}</p>
        <h2><a href={'https://nextjs.org/docs/app/api-reference/functions/use-router'}>useRouter Docs</a></h2>
      </div>
    </>
  )
}

export default UseRouterComponent;