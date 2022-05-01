import "./App.css";
import Header from "./components/Header/Header";
import Postlist from "./components/Postlist/Postlist";
import { useEffect, useState } from "react";
import { UserContext } from "./UserContext";


function App() {
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, [type]);


  return (
    <UserContext.Provider value={{posts,theme,setTheme,setType}}>
      <div className={`wrapper ${theme}`}>
        <Header />
        <main>
          <Postlist/>
        </main>
      </div>
    </UserContext.Provider>
  );
}

export default App;
