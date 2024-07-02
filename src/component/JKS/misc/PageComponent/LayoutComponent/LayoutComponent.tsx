import React from 'react';
import style from '@/common/style/jks/index.module.scss';
import Image from "next/image";
import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

const LayoutComponent = () => {

  const layoutCode = `
    export default function DashboardLayout({
      children, // will be a page or nested layout
    }: {
      children: React.ReactNode
    }) {
      return (
        <section>
          {/* Include shared UI here e.g. a header or sidebar */}
          <nav></nav>
     
          {children}
        </section>
      )
    }
  `

  const rootLayoutCode = `
    export default function RootLayout({
      children,
    }: {
      children: React.ReactNode
    }) {
      return (
        <html lang="en">
          <body>
            {/* Layout UI */}
            <main>{children}</main>
          </body>
        </html>
      )
    }
  `

  return (
    <>
      <div className={style.header}>
        <h1>Layout</h1>
      </div>
      <div className={style.content}>
        <p>
          layout은 page 처럼 단일 경로가 아닌 여러 경로 간에 공유되는 UI 입니다.
          레이아웃의 상태를 유지하고 반복적인 렌더링이 되지 않습니다.
        </p>
        <p>
          또한 layout 특징 중 하나는 각 layout 은 중첩이 가능합니다.
        </p>
        <p></p>
        <p>layout 은 하위 레이아웃이 존재할 경우 해당 페이지에 레이아웃이 적용이 됩니다.</p>
        <div className={style.image}>
          <Image
            src={'/assets/img/page_layout_3.png'}
            alt={'page-layout image 3'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <p>위의 경우에는 dashBoard 의 layout이 dashBoard/settings page.js 에도 적용이 됨을 알 수 있습니다.</p>
        <div style={{height: 430}}>
          <CodeSnippet codeString={layoutCode}/>
        </div>
        <p>네비게이션 같은 UI 컴포넌트를 layout 에 넣어 활용 가능합니다.</p>
        <p>재렌더링이 안된다는 특징을 활용하여 사용자들에게 깔끔한 로딩을 제공할 수 있습니다.</p>
        <h2>
          루트 레이아웃
        </h2>
        <p>
          루트 레이아웃은 디렉터리의 최상위 수준에서 정의되는 layout 파일입니다.
          app 디렉터리 하위에 있는 모든 경로에 적용이 됩니다.
        </p>
        <p>
          이 아이템은 필수이며 초기 HTML 을 수정할 수 있도록 html 과 body 태그를 포함 해야 합니다.
        </p>
        <div style={{height: 430}}>
          <CodeSnippet codeString={rootLayoutCode}/>
        </div>
        <h2>
          중첩 레이아웃
        </h2>
        <p>
          또한 layout 파일은 폴더 계층 구조에 따라 중첩이 됩니다.
        </p>
        <p>
          만약 dashBoard/layout.js 와, dashBoard/settings/layout.js 이 같이 존재한다면
        </p>
        <p>
          Dashboard 의 layout 을 래핑 이후 내부 경로의 아이템인 settings 의 layout 을 래핑하여 보여줍니다.
        </p>
        <div className={style.image}>
          <Image
            src={'/assets/img/page_layout_4.png'}
            alt={'page-layout image 4'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <h2>
          알아두면 좋은 점
        </h2>
        <p>
          {`1. 루트 레이아웃에만 <html>및 <body>태그가 포함될 수 있습니다.`}
        </p>
        <p>
          {`2. 파일 layout.js과 page.js 파일이 동일한 폴더에 정의되면 layout.js 가 page.js 를 래핑합니다.`}
        </p>
        <p>
          3. layout 파일도 기본적으로 서버 구성요소입니다. use client 를 통해 클라이언트 구성요소로 전환 가능합니다.
        </p>
      </div>
    </>
  )
}

export default LayoutComponent