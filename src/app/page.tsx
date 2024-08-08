"use client";
import Comment from "@/components/Comment";
import PostOwnner from "@/components/PostOwnner";
import Reply from "@/components/Reply";
import { comments } from "@/libs/comments";

export default function Home() {

  const comment = (comments: string) => {
    
  };

  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
      >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner name="Sirawit Seetong" studentid="660610802" like="100" />

        {/* Comment Example */}
        {comments.map((comment) => (
          <Comment

            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          />
          ))}

        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
