import React, { useEffect } from "react";
import PostName from "./PostName";
import { useSelector } from "react-redux";
import Spinner from "../UI/Spinner";

const PostsList = ({ name }) => {
  const posts = useSelector((state) => state.post);

  let postsList = posts.currentPosts;
  if (name !== "") {
    console.log("Name check running");
    postsList = posts.currentPosts.filter((item) => {
      if (item['Title'].toLowerCase().includes(name.toLowerCase())) {
        return item;
      }
    });
  }

  if (postsList.length !== 0) {
    return (
      <ul>
        {postsList.map((item) => {
          return <PostName key={item.id} currentPost={item} />;
        })}
      </ul>
    );
  } else {
    return <Spinner />;
  }
};

export default React.memo(PostsList);
