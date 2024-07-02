import React from 'react';
import style from '@/common/style/jks/index.module.scss';
import Image from "next/image";

const HowWorkRouteComponent = () => {
  return (
    <>
      <div className={style.header}>
        <h1>어떻게 Route 와 Navigation 이 작동하는가</h1>
      </div>
      <div className={style.content}>
        <h2> 앱 라우터는 라우팅 탐색을 위해 하이브리드 접근 방식을 사용한다고 합니다.</h2>
        <p>서버에서 애플리케이션 코드는 세그먼트별로 코드 분할이 됩니다. 클라이언트에서 NEXT.JS 는 경로 세그먼트를 미리 가져오고 캐싱합니다.</p>
        <p>사용자는 새 경로로 이동할 때 브라우저를 로드하지 않고 변경된 세그먼트만 다시 렌더링하여 사용자 경험과 성능을 향상시킵니다.</p>
        <h2>
          1. 코드분할
        </h2>
        <p>
          코드 분할을 사용하여 어플리캐이션의 코드를 더 작은 번들로 만들어 브라우저에서 다운로드하게 만들어 실행하기 때문에 성능이 향상됩니다.
        </p>
        <p>
          서버 구성 요소를 사용하면 어플리케이션의 코드가 세그먼트별로 자동 코드분할이 됩니다.
        </p>
        <h2>
          2. 프리패치
        </h2>
        <p>
          사용자가 경로를 이동하기 전에 백그라운드에서 미리 경로를 로드하는 방식입니다.
        </p>
        <p>NEXT.JS 두 가지 코드를 미리 가져오는 방식이 있습니다.</p>
        <p></p>
        <p>- {`<Link /> 사용하기. 사용자의 뷰포트에 표시되면 프리패치를 합니다.`}</p>
        <p> useRouter Hook 함수의 router.prefetch(() 를 사용하면 프리패치를 합니다.</p>
        <h2>다만 loading.js 이 있다면 작동 방식이 약간 달라집니다.</h2>
        <p>loading.js 는 페이지나 레이아웃이 로드될 때의 로딩 상태를 표시하는 역할을 합니다.</p>
        <p>- 사용자의 요청을 줄이기 위해 loading.js 파일이 있는 첫 번쨰 컴포넌트까지의 레이아웃만 사전로딩되며 30초 동안 캐시가 작동합니다.</p>
        <h2>
          3. 캐싱
        </h2>
        <p>
          Next.js 에는 <a href={'https://nextjs.org/docs/app/building-your-application/caching#router-cache'}>라우터 캐시</a>
          라는 클라이언트 메로리 캐시가 존재합니다.
        </p>
        <p>사용자가 앱을 탐색할 때 미리 가져온 세그먼트 경로를 캐시로 저장합니다.</p>
        <p>탐색시 요청 수와 전송되는 데이터 수를 줄여 성능을 최적화 합니다.</p>
        <h2>4. 부분 렌더링</h2>
        <p>클라이언트에서 라우트를 변경하였을 때 다시 렌더링되는 곳은 변경되는 페이지만을 의미하며 나머지 공유 세그먼트는 유지됩니다.</p>
        <div className={style.image}>
          <Image
            src={'/assets/img/page_navigation_1.png'}
            alt={'page-layout image 1'}
            layout={'fill'}
            objectFit={'cover'}
          />
        </div>
        <p>위 사진의 경우 page.js 의 아이템은 변경되지만 dashboard 에 있는 layout 은 유지됩니다.</p>
        <h2>5. 소프트 네비게이션</h2>
        <p>브라우저는 페이지 간을 탐색할 때 하드 탐색을 수행합니다. 하지만 NEXT.JS 는 소프트 탐색을 합니다.</p>
        <p>부분 렌더링 / 클라이언트 측 라우팅 / 상태 보존 / 빠른 탐색등의 이점을 가져올 수 있습니다.</p>
        <h2>6. 앞 뒤 이동</h2>
        <p>NEXT.JS 는 앞뒤 탐색을 할 때 스크롤을 유지하고 라우터 캐시를 이용하여 세그먼트를 재사용합니다.</p>
      </div>
    </>
  )
}

export default HowWorkRouteComponent;