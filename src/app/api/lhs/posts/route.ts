export async function GET(request: Request) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }
  });
  const data = await res.json();

  return Response.json({ data });
}
