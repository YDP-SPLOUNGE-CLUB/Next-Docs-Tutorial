import React from 'react';
import style from "@/common/style/jks/index.module.scss";
import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

const MetaDataComponent = () => {

  const metaString = `
    import { Metadata } from 'next'
 
    export const metadata: Metadata = {
      title: 'Next.js',
    }
     
    export default function Page() {
      return '...'
    }
    ....
  `

  return (
    <>
      <div className={style.header}>
        <h1>MetaData</h1>
      </div>
      <div className={style.content}>
        <p>디렉터리 내에서 {`<head /> meta title`} 등의 데이터를 변경 가능합니다. </p>
        <p>또는 generateMetadata 를 통해서 변경 가능합니다.</p>
        <p></p>
        <p>참고 내용 https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function</p>
        <CodeSnippet codeString={metaString}/>
        <h2>알아두면 좋은 점</h2>
        <p>metaData 또한 기본적으로 서버에서 동작합니다. </p>
      </div>
    </>
  )
}

export default MetaDataComponent