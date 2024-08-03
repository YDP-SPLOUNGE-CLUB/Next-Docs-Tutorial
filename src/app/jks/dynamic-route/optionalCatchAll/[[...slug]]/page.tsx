import { notFound } from 'next/navigation';
import Comments from "@/app/jks/dynamic-route/catchAll/[...slug]/CommentContent";
import PostContent from "@/app/jks/dynamic-route/catchAll/[...slug]/PostContent";

export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return posts.flatMap((post: any) => [
    { slug: [post.id.toString()] },
    { slug: [post.id.toString(), 'comments'] },
  ]);
}

export default async function PostPage({ params }:any) {
  const { slug } = params;

  // Optional Catch-all Segments로 경로가 없을 때 기본 페이지를 렌더링
  if (!slug || slug.length === 0) {
    return <div>Welcome to the Posts Page</div>;
  }

  const postId = slug[0];

  if (slug.length > 1 && slug[1] === 'comments') {
    return <Comments postId={postId} />;
  }

  return <PostContent postId={postId} />;
}
