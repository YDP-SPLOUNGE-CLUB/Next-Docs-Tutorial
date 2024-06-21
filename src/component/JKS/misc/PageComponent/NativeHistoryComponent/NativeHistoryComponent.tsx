import React from 'react';
import style from '@/common/style/jks/index.module.scss';
import {useSearchParams} from "next/navigation";
import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

const NativeHistoryComponent = () => {

  const exampleCode = `
    const searchParams = useSearchParams()
      
    function updateSorting(sortOrder: string) {
      const params = new URLSearchParams(searchParams.toString())
      params.set('sort', sortOrder)
      window.history.pushState(null, '', "?{params.toString()}")
      // or
      window.history.replaceState(null, '', "?{params.toString()}") 
    }
`


  return (
    <>
      <div className={style.header}>
        <h1>Native History API</h1>
      </div>
      <div className={style.content}>
        <p>Next js 에서도 window.history.pushState, window.history.replaceState 등의 함수를 사용 가능합니다.</p>
        <p>또한 페이지를 다시 로드하지 않고 기록 스택을 업데이트 할 수 있습니다.</p>
        <CodeSnippet codeString={exampleCode} />
        <p>push 를 사용할시 이전 상태로 돌아갈 수 있지만 replace 를 사용시 이전 상태로 돌아갈 수 업습니다.</p>
      </div>
    </>
  )
}

export default NativeHistoryComponent