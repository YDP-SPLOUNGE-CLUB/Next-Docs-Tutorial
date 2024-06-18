'use client';

import React from 'react';
import style from '@/common/style/jks/index.module.scss';
import Image from "next/image";
import CodeSnippet from "@/component/JKS/misc/CodeSnippet/CodeSnippet";
import StepNavigation from "@/component/JKS/layout/StepNavigation/StepNavigation";
import PageComponent from "@/component/JKS/misc/PageComponent/PageLayout/PageComponent";

export default function PageLayout() {

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
    <div className={style.page}>
      <PageComponent/>
      <StepNavigation nextPage={{name: 'Linking and Navigating', route: 'page-layout'}}/>
    </div>
  )
}