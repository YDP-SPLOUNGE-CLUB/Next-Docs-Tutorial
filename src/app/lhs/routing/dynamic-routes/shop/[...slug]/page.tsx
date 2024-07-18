export default function ShopPage({ params }: { params: { slug: string[] } }) {
  return (
    <div>
      {JSON.stringify(params)}
    </div>
  )
}
