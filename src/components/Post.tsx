import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import styles from "./Post.module.css";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

export interface PostType {
  id: number;
  author: Author;
  content: Content[];
  publishedAt: Date;
}

interface PostProps {
  post: PostType;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState([
    "Just posted a new project to my profile, checkitout",
  ]);

  const [newCommentText, setNewCommentText] = useState("");

  const datePublishedFormatted = format(
    post.publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    { locale: ptBR }
  );

  const publishedRelativeToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewComments(event: FormEvent) {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function deleteComment(commentToDelete: string) {
    const newCommentsWithoutDeletedOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });

    setComments(newCommentsWithoutDeletedOne);
  }

  function handleInvalidNewComment(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("Por favor digite algo");
  }

  const newCommentIsEmpity = newCommentText.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>
        </div>

        <time
          title={datePublishedFormatted}
          dateTime={post.publishedAt.toISOString()}
        >
          {publishedRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {post.content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href={item.content}>{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleNewComments} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentario"
          onChange={handleNewCommentChange}
          value={newCommentText}
          required
          onInvalid={handleInvalidNewComment}
        />

        <footer>
          <button type="submit" disabled={newCommentIsEmpity}>
            Comentar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
