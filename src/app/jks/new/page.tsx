import Link from "next/link";

export default function Page() {
  return (
    <div style={{zIndex: 100}}>
      안보입니다.
      <Link href={'/jks/new/item'}> 클릭</Link>
    </div>
  )
}
