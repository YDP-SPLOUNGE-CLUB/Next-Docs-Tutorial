import { ReactNode } from 'react';
import Link from 'next/link';

export default function Layout({children, modal}:{children: ReactNode, modal: ReactNode}) {
  return (
    <div>
      <nav>
        <Link href="/lhs/routing/intercepting-routes/login">Open modal</Link>
      </nav>
      <div>{modal}</div>
      <div>{children}</div>
    </div>
  )
}
