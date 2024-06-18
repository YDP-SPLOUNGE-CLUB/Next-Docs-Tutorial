'use client';
import style from './home.module.scss';
import {useRouter} from "next/navigation";

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
          <li onClick={() => onClickRouter('defining-routes')}> - Defining Route </li>
          <li> - Pages and Layouts</li>
          <li> - Linking and Navigating</li>
          <li> - Loading UI and Streaming</li>
        </ul>
      </div>
    </div>
  )
}