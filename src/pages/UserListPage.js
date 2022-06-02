import React, { useCallback, useState } from "react";
import Dropdown from "../components/Input/Dropdown";
import UsersList from "../components/Users/UsersList";
import Search from "../components/Input/Search";
import styles from "../components/Input/Search.module.css";

import Card from "../components/UI/Card/Card";
import classes from "../components/Users/UsersList.module.css";

const UsersListPage = () => {

  const [searchedName, setSearchedName] = useState("");
  const [role, setRole] = useState("");


  const searchHandler = useCallback((event)=>{
    setSearchedName(prevState=>{
      prevState = event.target.value;
      return prevState;
    })
  },[searchedName]);

  const selectRoleHandler = (event) => {
    setRole(event.target.value);
  };

  return (
      <Card className={classes.words}>
        <h2>Users List</h2>
        <div className={styles.div}>
          <Search onSearch={searchHandler} name={searchedName}/>
          <Dropdown onChange={selectRoleHandler} />
        </div>
        <UsersList
          name={searchedName}
          role={role}
        />
      </Card>
  );
};

export default UsersListPage;
