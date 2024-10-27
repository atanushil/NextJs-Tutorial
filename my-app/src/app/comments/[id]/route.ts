import { comments } from "../data";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const body = await req.json();
  const { comment } = body;
  const { id } = params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );
  comments[commentIndex].comment = comment;
  return Response.json(comments[commentIndex]);
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const commentIndex = comments.findIndex(
    (comment) => comment.id === parseInt(id)
  );

  const deleteComment = comments[commentIndex];
  comments.splice(commentIndex, 1);
  return Response.json(deleteComment);
}
