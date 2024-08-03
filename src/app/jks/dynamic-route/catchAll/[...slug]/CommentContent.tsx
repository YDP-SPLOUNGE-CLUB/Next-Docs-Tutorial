import {notFound} from "next/navigation";

async function fetchComments(postId: string) {
  const comments = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((res) => res.json());
  if (comments.length === 0) {
    return null;
  }
  return comments;
}

export default async function Comments({postId}: any) {
  const comments = await fetchComments(postId);
  if (!comments) {
    notFound();
  }

  return (
    <div>
      <h2>Comments for Post {postId}</h2>
      {comments.map((comment: any) => (
        <div key={comment.id}>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
