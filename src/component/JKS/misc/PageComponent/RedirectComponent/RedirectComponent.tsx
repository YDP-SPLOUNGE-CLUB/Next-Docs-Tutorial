import React from 'react';
import style from '@/common/style/jks/index.module.scss';
import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";

const RedirectComponent = () => {

  const exampleCode = `
    import { redirect } from 'next/navigation'
 
    async function fetchTeam(id: string) {
      const res = await fetch('https://...')
      if (!res.ok) return undefined
      return res.json()
    }
     
    export default async function Profile({ params }: { params: { id: string } }) {
      const team = await fetchTeam(params.id)
      if (!team) {
        redirect('/login')
      }
     
      // ...
    }
  `

  return (
    <>
      <div className={style.header}>
        <h1>redirect</h1>
      </div>
      <div className={style.content}>
        <p>클라이언트 기능이 아닌 서버에서 라우트를 조작해야할 경우 redirect 유틸함수를 사용해야 합니다.</p>
        <CodeSnippet codeString={exampleCode}/>
        <h2>알아두면 좋은 점</h2>
        <p>redirect 는 307번 상태 코드와 303번 상태 코드를 반환합니다.</p>
        <h2>- 307 Temporary Redirect (임시 리디렉션)</h2>
        <p>
          Next.js에서 리디렉션을 설정할 때 기본적으로 사용되는 상태 코드입니다.
        </p>
        <p>
          이 상태 코드는 클라이언트에게 요청한 리소스가 임시로 다른 URL로 이동했음을 알립니다.
        </p>
        <p>
          중요한 점은 클라이언트는 동일한 HTTP 메서드(예: GET, POST)를 사용하여 새 URL로 요청을 해야 합니다.
        </p>
        <h2>- 303 See Other (기타 참조)</h2>
        <p>
          주로 서버에서 POST 요청 후 성공 페이지로 리디렉션할 때 사용됩니다.
        </p>
        <p>
          이 상태 코드는 클라이언트에게 POST 요청의 결과로 다른 URL을 참조하도록 알립니다.
        </p>
        <p>
          중요한 점은 클라이언트가 GET 메서드를 사용하여 새 URL로 요청을 해야 한다는 것입니다.
        </p>
        <p></p>
        <p>- Redirect try/catch 는 내부적으로 오류가 발생하므로 블록 외부에서 사용해야 합니다.</p>
        <p></p>
        <p>- 렌더링 프로세스 전에 리디렉션하려면 next.config.js 또는 Middleware 를 사용해야 합니다.</p>
      </div>
    </>
  )
}

export default RedirectComponent