import React from 'react';
import style from './routing.module.scss';
import Image from "next/image";
import StepNavigation from "@/component/JKS/StepNavigation/StepNavigation";

const RouteIndexPage = () => {
  return (
    <div className={style.page}>
      <div className={style.header}>
        <h1>경로 생성</h1>
      </div>
      <div className={style.content}>
        <p>
          Next.js는 폴더를 사용하여 경로를 정의하는 파일 시스템 기반 라우터를 사용합니다.
        </p>
        <p>
          만약 중첩된 경로를 만들고 싶다면 밑의 사진과 같이 폴더를 중첩으로 만들면 됩니다.
        </p>
        <div className={style.image}>
          <Image
            src={'/assets/img/routing_1.png'}
            alt={'defining-routes image 1'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
      </div>
      <div className={style.content}>
        <div className={style.emptyLine}></div>
        <div className={style.header}>
          <h1>Page.js</h1>
        </div>
        <p>
          경로 세그먼트를 공개적으로 액세스할 수 있도록 하려면 page.tsx 가 필요합니다.
        </p>
        <div className={style.image}>
          <Image
            src={'/assets/img/routing_2.png'}
            alt={'defining-routes image 2'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <p>
          Next.js 13 버전 이상에서 App 디렉터리가 지원되면서.
          page.js|tsx 가 없다면 페이지에 접근할 수 없습니다.
        </p>
      </div>
      <div className={style.content}>
        <div className={style.emptyLine}></div>
        <div className={style.header}>
          <h1>UI 작성</h1>
          <div>
            페이지를 만들기 위해서는 page.js|tsx 에서 React 구성 요소를 만들어 보여주면 됩니다.
          </div>
        </div>
      </div>
      <StepNavigation nextPage={{name: 'Page and Layouts', route: ''}}/>
    </div>
  )
}

export default RouteIndexPage