import React, { useCallback, useState } from "react";
import {Outlet,useLocation} from "react-router-dom";
import PostsList from "../components/Posts/PostsList";
import Search from "../components/Input/Search";
import styles from "../components/Input/Search.module.css";

import Card from "../components/UI/Card/Card";
import classes from "../components/Users/UsersList.module.css";

const PostsListPage = () => {

  const [searchedName, setSearchedName] = useState("");
  const location = useLocation();

  const searchHandler = useCallback((event)=>{
    setSearchedName(prevState=>{
      prevState = event.target.value;
      return prevState;
    })
  },[searchedName]);


  return (
      <Card className={classes.words}>
        <h2>Posts List</h2>
        <div className={styles.div}>
          <Search onSearch={searchHandler} name={searchedName}/>
        </div>
        <PostsList
          name={searchedName}
        />
        <Outlet />
      </Card>
  );
};

export default PostsListPage;
