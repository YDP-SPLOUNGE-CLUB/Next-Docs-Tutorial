import React from 'react';
import style from './StepNavigation.module.scss';

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
  return (
    <div className={style.pagination}>
      <div className={style.container}>
        {prevPage ? (
          <div className={style.buttonWrap}>{prevPage.name}</div>
        ) : (
          <div></div>
        )}
        {nextPage ? (
          <div className={style.buttonWrap}>{nextPage.name}</div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  )
}

export default StepNavigation