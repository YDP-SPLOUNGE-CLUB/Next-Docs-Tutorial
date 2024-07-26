export async function GET(request: Request, { params }: { params: { post: string } }) {
  const { post } = params
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post}`);
  const data = await res.json();
  return Response.json({ data })
}
