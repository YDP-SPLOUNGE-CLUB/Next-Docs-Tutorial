import {notFound} from "next/navigation";

async function fetchPost(postId: string) {
  const post = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then((res) => res.json());
  if (!post.id) {
    return null;
  }
  return post;
}

export default async function PostContent({ postId }: any) {
  const post = await fetchPost(postId);
  if (!post) {
    notFound();
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
