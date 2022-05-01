import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import PostItem from "./PostItem/PostItem";

const Postlist = () => {
  const {posts}= useContext(UserContext);
  return (
    <div>
      {posts.map((item) => (
        <PostItem
          key={item.id}
          name={item.name}
          email={item.email}
          title={item.title}
          body={item.body}
        />
      ))}
    </div>
  );
};

export default Postlist;
