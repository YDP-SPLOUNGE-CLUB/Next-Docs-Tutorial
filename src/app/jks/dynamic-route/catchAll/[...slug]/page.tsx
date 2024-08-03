import {notFound} from 'next/navigation';
import PostContent from './PostContent';
import Comments from "@/app/jks/dynamic-route/catchAll/[...slug]/CommentContent";


export async function generateStaticParams() {
  const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json());

  return posts.flatMap((post: any) => [
    {slug: [post.id.toString()]},
    {slug: [post.id.toString(), 'comments']},
  ]);
}

export default async function PostPage({params}: any) {
  const {slug} = params;

  if (!slug || slug.length === 0) {
    notFound();
    return;
  }

  const postId = slug[0];

  if (slug[1] === 'comments') {
    return <Comments postId={postId}/>;
  }

  return <PostContent postId={postId}/>;
}
