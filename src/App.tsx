import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import style from "./App.module.css";
import "./global.css";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "http://github.com/liara987.png",
      name: "Liara",
      role: "Web Developer",
    },
    content: [
      { type: "paragraph", content: "Hi everyone 👋" },
      {
        type: "paragraph",
        content: "Just posted a new project to my profile, checkitout",
      },
      { type: "link", content: "https://github.com/liara987/feed" },
    ],
    publishedAt: new Date("2023-04-25 21:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "http://github.com/andressamonteirocarvalho.png",
      name: "Andressa Monteiro Carvalho",
      role: "Fullstack Developer",
    },
    content: [
      { type: "paragraph", content: "Hello 🥰" },
      {
        type: "paragraph",
        content:
          "I update my github profile, it would be great if you could take a look 🤗",
      },
      {
        type: "link",
        content:
          "https://github.com/andressamonteirocarvalho/andressamonteirocarvalho",
      },
    ],
    publishedAt: new Date("2023-04-26 13:00:00"),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />

        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </>
  );
}

export default App;
