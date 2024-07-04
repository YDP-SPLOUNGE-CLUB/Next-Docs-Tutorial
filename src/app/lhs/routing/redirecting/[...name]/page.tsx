import { redirect } from 'next/navigation';

export default function NamePage({ params: { name } }: { params: { name: string[] }, searchParams: {} }) {
  if(name.length === 0 || name.length > 1) {
    redirect('/lhs/routing/redirecting')
  }

  return (
    <div>Hello! {name[0]} 👋🏻</div>
  )
}
