import Link from 'next/link';

export default function Redirecting() {
  return (
    <div>
      <ul>
        <li>
          <Link href='/lhs/routing/redirecting/redirect'>
            redirect
          </Link>
        </li>
        <li>
          <Link href='/lhs/routing/redirecting/use-router'>
            useRouter
          </Link>
        </li>
        <li>
          <Link href='/lhs/routing/redirecting/old'>
            old
          </Link>
        </li>
        <li>
          <Link href='/lhs/routing/redirecting/new'>
            new
          </Link>
        </li>
      </ul>
    </div>
  )
}
