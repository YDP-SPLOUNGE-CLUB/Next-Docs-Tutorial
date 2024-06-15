'use client';

import React from 'react';
import style from './Header.module.scss';
import {usePathname} from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const headerTitle = pathName.substring(4);
  console.log(headerTitle)

  return (
    <div className={style.header}>
      <div className={style.left}>
        <div className={style.homeButton}>홈으로</div>
        <p>현재 위치 {pathName}</p>
      </div>
    </div>
  )
}

export default Header