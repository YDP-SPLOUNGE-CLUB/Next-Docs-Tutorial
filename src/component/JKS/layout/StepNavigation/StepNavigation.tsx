import React from 'react';
import style from './StepNavigation.module.scss';
import {useRouter} from "next/navigation";

interface Props {
  prevPage?: {
    name: string;
    route: string;
  }
  nextPage?: {
    name: string;
    route: string;
  }
}

const StepNavigation = ({nextPage, prevPage}: Props) => {
  const router = useRouter();

  return (
    <div className={style.pagination}>
      <div className={style.container}>
        {prevPage ? (
          <div
            className={style.buttonWrap}
            onClick={() => router.push(prevPage.route)}
          >{prevPage.name}</div>
        ) : (
          <div></div>
        )}
        {nextPage ? (
          <div
            className={style.buttonWrap}
            onClick={() => router.push(nextPage.route)}
          >{nextPage.name}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default StepNavigation