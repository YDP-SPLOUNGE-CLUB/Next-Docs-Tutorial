interface Props {
  params: {
    slug: string;
  }
}

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return posts.map((post: any) => ({
    slug: post.id.toString(),
  }));
}

export default async function PostPage({params}: Props) {
  const {slug} = params;
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`).then((res) => res.json());

  if (!post.id) {
    return (
      <div>
        못찾았어용..
      </div>
    )
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}