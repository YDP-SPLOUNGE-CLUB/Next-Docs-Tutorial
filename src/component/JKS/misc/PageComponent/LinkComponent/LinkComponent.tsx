import React from 'react';
import style from '@/common/style/jks/index.module.scss';
import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";
import {usePathname, useRouter} from "next/navigation";
const LinkComponent = () => {
  const LinkCode = `
    import Link from 'next/link'
 
    export default function Page() {
      return <Link href="/dashboard">Dashboard</Link>
    }
  `

  const exampleCode1 = `
    const Header = () => {
      const pathName = usePathname();
      const headerTitle = pathName.substring(5);
    
      return (
        <div className={style.header}>
          <div className={style.left}>
            <Link className={style.homeButton} href={'/jks/home'}>홈으로</Link>
            <p>현재 위치 {headerTitle}</p>
          </div>
        </div>
      )
    }
  `

  const exampleCode2 = `
    <Link href="/dashboard#settings">Settings</Link>
     
    // Output
    <a href="/dashboard#settings">Settings</a>
  `

  const exampleCode3 = `
    // next/link
    <Link href="/dashboard" scroll={false}>
      Dashboard
    </Link>
    
    // useRouter
    const router = useRouter()
     
    router.push('/dashboard', { scroll: false })
  `

  return (
    <>
      <div className={style.header}>
        <h1>{`<Link />`}</h1>
      </div>
      <div className={style.content}>
        <p>Link 는 HTML 태그를 확장하여 프리패칭 기법을 사용하여 로드합니다.</p>
        <p>* 프리패치는 사용자가 경로를 방문하기 전 백그라운드에서 경로를 미리 로드하는 방법입니다.</p>
        <p></p>
        <div>
          <CodeSnippet codeString={LinkCode} />
        </div>
        <p>Link 에는 여러 옵션이 있습니다.</p>
        <p>해당 링크에 들어가시면 많은 Link 정보를 얻을 수 있습니다.</p>
        <p><a href={'https://nextjs.org/docs/app/api-reference/components/link'}>링크</a></p>
        <p></p>
        <h2>예시</h2>
        <p>페이지에서 페이지로 이동할 때 동적 세그먼트에 연결하거나, 활성 상태를 확인하는데 사용할 수 있습니다.</p>
        <CodeSnippet codeString={exampleCode1} />

        <h2>예시2</h2>
        <p>만약 앱 라우터의 이동 이후 특정 id 로 스크롤하여 이동을 하고 싶다면 href 링크 앞에 #id 를 붙이면 라우터 이동 후 스크롤 됩니다.</p>
        <CodeSnippet codeString={exampleCode2} />

        <h2>스크롤 복원 비활성화</h2>
        <p>Next.js 앱 라우터는 기본적으로 새 경로의 맨 위로 스크롤을 시킵니다.</p>
        <p>만약 스크롤 위치를 유지시키고 싶다면 옵션에 scroll: false 를 적용시키면 스크롤의 위치가 유지됩니다.</p>
        <CodeSnippet codeString={exampleCode3} />
      </div>
    </>
  )
}

export default LinkComponent