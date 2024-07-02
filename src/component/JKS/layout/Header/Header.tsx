'use client';

import React from 'react';
import style from './Header.module.scss';
import {usePathname, useRouter} from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const router = useRouter();
  const headerTitle = pathName.substring(5);

  return (
    <div className={style.header}>
      <div className={style.left}>
        <div className={style.homeButton}
          onClick={() => router.push('/jks/home')}
        >홈으로</div>
        <p>현재 위치 {headerTitle}</p>
      </div>
    </div>
  )
}

export default Header