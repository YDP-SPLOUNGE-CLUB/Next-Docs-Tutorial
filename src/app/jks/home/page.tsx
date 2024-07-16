'use client';
import style from './home.module.scss';
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();

  const onClickRouter = (route: string) => {
    router.push(route);
  }

  return (
    <div>
      <div className={style.header}>
        <h1>NEXT JS Docs</h1>
      </div>

      <div className={style.list}>
        <ul> 1장
          <li><Link href={'defining-routes'}>- Defining Route </Link></li>
          <li><Link href={'page-layout'}>- Pages and Layouts </Link></li>
          <li><Link href={'navigation'}>- Linking and Navigating </Link></li>
          <li><Link href={'loading'}>- Loading UI and Streaming </Link></li>
          <li><Link href={'error'}>- Error Handle </Link></li>
          <li><Link href={'redirect/old-path'}>- Redirect / Server Redirect (Path Name = old-path {'->'} newPath) </Link>
          </li>
          <li><Link href={'redirect/useRouter'}>- Redirect / Client Redirect </Link></li>
        </ul>
      </div>
    </div>
  )
}