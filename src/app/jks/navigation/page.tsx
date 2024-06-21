'use client'
import React from 'react';
import style from '@/common/style/jks/index.module.scss';
import LinkComponent from "@/component/JKS/misc/PageComponent/LinkComponent/LinkComponent";
import UseRouterComponent from "@/component/JKS/misc/PageComponent/UseRouterComponent/UseRouterComponent";
import RedirectComponent from "@/component/JKS/misc/PageComponent/RedirectComponent/RedirectComponent";
import StepNavigation from "@/component/JKS/layout/StepNavigation/StepNavigation";
import NativeHistoryComponent from "@/component/JKS/misc/PageComponent/NativeHistoryComponent/NativeHistoryComponent";
import HowWorkRouteComponent from "@/component/JKS/misc/PageComponent/HowWorkRouteComponent/HowWorkRouteComponent";

export default function NavigationPage() {

  return (
    <div className={style.page}>
      <div className={style.header}>
        <h1>Linking and Navigating</h1>
      </div>
      <div className={style.content}>
        <p>Next.js 에서 Route 를 탐색하는 방법은 여러가지 있습니다.</p>
        <p></p>
        <p>{`- Next 에서 제공하는 <Link /> 사용하기`}</p>
        <p>{`- useRouter Hook 을 사용하기 (클라이언트 사이드)`}</p>
        <p>{`- redirect 기능 사용하기 (서버 사이드)`}</p>
        <p>{`- window 기능 사용하기`}</p>
      </div>
      <div>
        <div className={style.emptyLine}/>
      </div>
      <LinkComponent/>
      <div>
        <div className={style.emptyLine}/>
      </div>
      <UseRouterComponent/>
      <div>
        <div className={style.emptyLine}/>
      </div>
      <RedirectComponent/>
      <div>
        <div className={style.emptyLine}/>
      </div>
      <NativeHistoryComponent/>
      <div>
        <div className={style.emptyLine}/>
      </div>
      <HowWorkRouteComponent />
      <StepNavigation
        prevPage={{name: 'Linking and Navigating', route: 'navigation'}}
      />
    </div>
  )
}