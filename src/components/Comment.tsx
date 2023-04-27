import { useState } from "react";
import styles from "./Comment.module.css";
import { HandsClapping, Trash } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import { Author } from "./Post";

interface CommentProps {
  content: string;
  author: Author;
  dateFormated: string;
  date: Date;
  onDeleteComment: (comment: string) => void;
}

export function Comment({
  content,
  onDeleteComment,
  author,
  dateFormated,
  date,
}: CommentProps) {

  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    console.log(content);

    onDeleteComment(content);
  }

  function handleLike() {
    setLikeCount((likes) => {
      return likes + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={dateFormated} dateTime={date.toISOString()}>
                {dateFormated}
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Delete comment">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button onClick={handleLike}>
            <HandsClapping />
            Clap <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
