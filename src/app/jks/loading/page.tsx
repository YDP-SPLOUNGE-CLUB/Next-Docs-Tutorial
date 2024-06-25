// src/app/loadingPage.tsx
import React, {Suspense} from 'react';
import Loading from "@/app/jks/loading/loading";
import dynamic from "next/dynamic";

const DynamicComponent = dynamic(() => import('@/component/JKS/misc/DynamicComponent/DynamicComponent'), {
  ssr: false, // 서버사이드 렌더링을 비활성화하여 클라이언트에서만 렌더링되도록 설정
  loading: () => <Loading />, // 로딩 상태에서 보여줄 컴포넌트 설정
});

const LoadingPage: React.FC = () => {
  return (
    <div>
      <Suspense fallback={<Loading/>}>
        <DynamicComponent/>
      </Suspense>
    </div>
  );
};

export default LoadingPage;
