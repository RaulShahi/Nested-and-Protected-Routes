import React, { useEffect } from "react";
import UserName from "./UserName";
import { useSelector } from "react-redux";
import Spinner from "../UI/Spinner";

const UsersList = ({ name, role }) => {
  const crudData = useSelector((state) => state.user);

  let usersList = crudData.currentUsers;

  if (name !== "") {
    console.log("Name check running");
    usersList = crudData.currentUsers.filter((item) => {
      // if (item["Name"].toLowerCase().includes(name.toLowerCase())) {
      //   return item;
      // }
      return item["Name"].toLowerCase().includes(name.toLowerCase())
    });
  }
  if (role !== "") {
    usersList = usersList.filter((item) => {
      if (item["Category"] === role) {
        return item;
      }
      console.log(item.category);
    });
  }
  if (usersList.length !== 0) {
    return (
      <ul>
        {usersList.map((item) => {
          return <UserName key={item.id} currentUser={item} />;
        })}
      </ul>
    );
  } else {
    return <Spinner/>;
  }
};

export default React.memo(UsersList);
