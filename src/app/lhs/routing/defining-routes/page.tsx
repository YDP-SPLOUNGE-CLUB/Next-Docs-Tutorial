import Image from 'next/image'
import styles from '@/styles/index.module.scss';

export default function DefiningRoutesPage() {
  return (
    <div>
      <h1>Routing Fundamentals</h1>
      <p>Next.js는 폴더를 사용하여 경로를 정의하는 파일 시스템 기반 라우터를 사용한다.</p>
      <div className={styles.image}>
        <Image
          src={'https://nextjs.org/_next/image?url=%2Fdocs%2Fdark%2Froute-segments-to-path-segments.png&w=3840&q=75'}
          fill
          alt="route-segments-to-path-segments"
        />
      </div>
    </div>
  )
}
