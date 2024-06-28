import { Metadata } from 'next';

export default function PagesAndLayoutsPage() {
  return (
    <div>
      <h2>Layout</h2>
      <p>레이아웃은 layout.js 파일에서 정의할 수 있다.</p>
      <h2>Template</h2>
      <p>템플릿은 template.js 파일에서 정의할 수 있다.</p>
      <h2>Metadata</h2>
      <p>메타데이터는 layout.js 또는 page.js 파일에서 정의하여 사용할 수 있다.</p>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Next.js'
}
