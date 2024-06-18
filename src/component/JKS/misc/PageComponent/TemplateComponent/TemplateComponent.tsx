import React from 'react';
import style from "@/common/style/jks/index.module.scss";
import Image from "next/image";

const TemplateComponent = () => {
  return (
    <>
      <div className={style.header}>
        <h1>Template</h1>
      </div>
      <div className={style.content}>
        <p>템플릿은 하위 페이지를 래핑한다는 점에서 layout과 유사합니다.</p>
        <p>다만 layout 은 재렌더링을 발생시키지 않고 한 상태를 계속해서 지속하는 특성을 가지고 있습니다.</p>
        <p></p>
        <p>템플릿은 탐색 시 각 하위 항목에 대해서 새로운 인스턴스를 만들어 보여줍니다.</p>
        <p>사용자가 템플릿을 공유하는 경로를 진입했을 때 새 인스턴스가 마운트되어</p>
        <p>DOM 요소를 생성하여 보여줍니다.</p>
        <p>특정 페이지나 특정 유형의 페이지에 대해 더 구체적인 구조와 스타일을 정의할때 사용합니다.</p>
        <p></p>
        <p>이러한 특징을 가지고 있어 다음과 같은 상황에서 사용하기에 더 적합합니다.</p>
        <p>1. 페이지 진입시 useEffect 이벤트를 발생시켜야 하거나, useState 의 상태를 초기화 시켜야 할 떄</p>
        <p>2. 예를 들어, 레이아웃 내부의 Suspense Boundaries는
          레이아웃이 처음 로드될 때만 fallback을 보여주고,
        </p>
        <p>
          페이지를 전환할 때는 fallback을 보여주지 않습니다.
          반면, 템플릿에서는 각 네비게이션(페이지 전환)마다 fallback이 표시됩니다.</p>
        <p></p>
        <p>구성 요소는 layout 과 page 와 동일하게 React 구성 요소를 내보내면 됩니다.</p>
        <p>해당 라우트 디렉터리에 template.js|ts|tsx 파일을 작성하면 됩니다.</p>
        <div className={style.image}>
          <Image
            src={'/assets/img/page_layout_5.png'}
            alt={'page-layout image 5'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <h2>
          알면 좋은 점.
        </h2>
        <p>
          template 와 layout 중 layout 이 상위 아이템이므로 참고하면 좋습니다.
        </p>
      </div>
    </>
  )
}

export default TemplateComponent;