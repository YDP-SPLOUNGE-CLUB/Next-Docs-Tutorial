'use client'

import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  return (
    <button type="button" onClick={() => router.push('/lhs/routing/redirecting')}>
      BACK
    </button>
  )
}
