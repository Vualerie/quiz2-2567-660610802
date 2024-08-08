// You can define interfaces for all React components here.
// Do not forget to export properly.

interface ReplyProps {
    userImagePath: string;
    username: string;
    replyText: string;
    likeNum: number;
}

interface commentsProps {
    userImagePath: string;
    username: string;
    commentText: string;
    likeNum: number;
    replies: ReplyProps[];
}

export type { ReplyProps };
export type { commentsProps };