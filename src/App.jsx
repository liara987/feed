import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import style from "./App.module.css";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <Sidebar />

        <main>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio id
          consectetur voluptate quo enim accusantium eius? Tenetur natus
          perferendis ea necessitatibus praesentium quisquam. Corporis
          distinctio iusto voluptatem veniam placeat voluptatum?
        </main>
      </div>
    </>
  );
}

export default App;
