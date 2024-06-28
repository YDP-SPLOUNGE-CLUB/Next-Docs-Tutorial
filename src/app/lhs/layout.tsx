import { ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/styles/index.module.scss';
import { getRoutes } from '@/utils/routes';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.content}>
      <ChapterMenu routes={getRoutes('src/app/lhs/routing')} />
      {children}
    </main>
  )
}

function ChapterMenu({ routes }: { routes: string[] }) {
  return routes.length > 0 ? (
    <nav className={styles.menu}>
      {routes.map(path => <Link key={path} href={path}>{path}</Link>)}
    </nav>
  ) : null
}
