import React from "react";
import PostItem from "./PostItem/PostItem";

const Postlist = (props) => {
  return (
    <div>
      {props.posts.map((item) => {
        return <PostItem key={item.id} title={item.title} info={item.body} name={item.name} email ={item.email} />;
      })}
  
    </div>
  );
};

export default Postlist;
