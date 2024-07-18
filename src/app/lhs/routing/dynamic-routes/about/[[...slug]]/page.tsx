export default function AboutPage({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      {JSON.stringify(params)}
    </div>
  )
}
