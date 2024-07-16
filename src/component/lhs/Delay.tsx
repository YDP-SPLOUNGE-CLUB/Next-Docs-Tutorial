import { delay } from '@/utils/common';
import { PropsWithChildren } from 'react';

type Props = {
  timeout: number;
}

export default async function Delay({ timeout, children }: PropsWithChildren<Props>) {
  await delay(timeout);
  return <div>{children}</div>
}
