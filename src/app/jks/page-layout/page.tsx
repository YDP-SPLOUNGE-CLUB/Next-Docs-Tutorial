'use client';

import React from 'react';
import style from '@/common/style/jks/index.module.scss';
import StepNavigation from "@/component/JKS/layout/StepNavigation/StepNavigation";
import PageComponent from "@/component/JKS/misc/PageComponent/PageComponent/PageComponent";
import LayoutComponent from "@/component/JKS/misc/PageComponent/LayoutComponent/LayoutComponent";
import TemplateComponent from "@/component/JKS/misc/PageComponent/TemplateComponent/TemplateComponent";
import MetaDataComponent from "@/component/JKS/misc/PageComponent/MetaDataComponent/MetaDataComponent";

export default function PageLayout() {

  return (
    <div className={style.page}>
      <PageComponent/>
      <div>
        <div className={style.emptyLine}/>
      </div>
      <LayoutComponent/>
      <div>
        <div className={style.emptyLine}/>
      </div>
      <TemplateComponent/>
      <div>
        <div className={style.emptyLine}/>
      </div>
      <MetaDataComponent/>
      <StepNavigation
        nextPage={{name: 'Linking and Navigating', route: 'navigation'}}
        prevPage={{name: 'Defining Route', route: 'defining-routes'}}
      />
    </div>
  )
}