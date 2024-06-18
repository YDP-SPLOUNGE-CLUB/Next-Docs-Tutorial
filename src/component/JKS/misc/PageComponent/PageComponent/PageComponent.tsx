import React from 'react';
import style from "@/common/style/jks/index.module.scss";
import Image from "next/image";
import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

const PageComponent = () => {
  const pageCode = `
    export default function Page() {
      return <h1>Hello, Home page!</h1>
    }
  `

  const useClientCode = `
    'use client';
    
    import React from 'react';
    import style from '@/common/style/jks/index.module.scss';
    ...
  `

  return (
    <>
      <div className={style.header}>
        <h1>Pages and Layouts</h1>
      </div>
      <div className={style.content}>
        <p>App 디렉터리에는 layout.js, page.js 과 template.js 를 사용하여 경로에 대한 UI 작성이 가능합니다.</p>
        <div className={style.emptyLine}></div>
      </div>
      <div className={style.header}>
        <h1>Page.js</h1>
      </div>
      <div className={style.content}>
        <p>
          페이지는 고유한 UI 입니다. page 는 다른 페이지에 귀속되지 않습니다.
        </p>
        <p>
          만약 index 페이지를 만들고 싶다면 app/ 디렉터리에 page.js 를 만들어 구성할 수 있습니다.
        </p>
        <div className={style.image}>
          <Image
            src={'/assets/img/page_layout_1.png'}
            alt={'page-layout image 1'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <div style={{height: '100'}}>
          <CodeSnippet codeString={pageCode}/>
        </div>
        <h2>
          알아두면 좋은 점.
        </h2>
        <p>
          1. page 는 .js .jsx 또는 .tsx 파일 사용이 가능합니다.
        </p>
        <p>
          2. page 는 트리 형식의 구조를 가지고 있습니다.
        </p>
        <div className={style.image}>
          <Image
            src={'/assets/img/page_layout_2.png'}
            alt={'page-layout image 1'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <p>
          {`3. page 는 기본적으로 서버에서 동작하는 파일이지만.
            page 파일 최상단에 'use client' 를 작성하면 클라이언트에서 작동합니다.`}
        </p>
        <CodeSnippet codeString={useClientCode}/>
      </div>
    </>
  )
}

export default PageComponent