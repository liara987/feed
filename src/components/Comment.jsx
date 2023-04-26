import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="http://github.com/liara987.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Liara</strong>
              <time title="25 de abril às 20:10h" dateTime="2023-04-04">
                Cerca de 2h atrás
              </time>
            </div>

            <button title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom, Parabens!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <samp>20</samp>
          </button>
        </footer>
      </div>
    </div>
  );
}
