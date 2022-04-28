import "./App.css";
import Header from "./components/Header/Header";
import Postlist from "./components/Postlist/Postlist";
import PostItem from "./components/Postlist/PostItem/PostItem";
import { useEffect, useState } from "react";

const initialPost = [
  { id: 1, title: "post1", text: "lorem ipsum dolor1" },
  { id: 2, title: "post2", text: "lorem ipsum dolor2" },
  { id: 3, title: "post3", text: "lorem ipsum dolor3" },
  { id: 4, title: "post4", text: "lorem ipsum dolor4" },
];

function App() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((json) => setPosts(json));
  }, [type]);
  
  const changeThemeHandler = () => {
    setTheme(theme =="light"? "dark":"light")
  };
  return (
    <div className={`wrapper ${theme}`}>
      <Header changeType={setType} changeTheme={changeThemeHandler} />
      <main>
        <Postlist posts={posts} />
      </main>
    </div>
  );
}

export default App;
