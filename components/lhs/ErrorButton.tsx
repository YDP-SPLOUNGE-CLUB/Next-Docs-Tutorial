'use client'

import { ReactNode, useState } from 'react';

export default function ErrorButton({ children }: { children?: ReactNode }) {
  const [errorFlag, setErrorFlag] = useState(false);

  if (errorFlag) {
    throw new Error('Error')
  }

  return (
    <button onClick={() => setErrorFlag(prev => !prev)}>{children}</button>
  )
}
