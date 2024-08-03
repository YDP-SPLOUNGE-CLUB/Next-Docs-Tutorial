async function getPost(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { next: { tags: ['post'] } })

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Page() {
  return (
    <div>
      {JSON.stringify(await getPost(4))}
    </div>
  )
}
