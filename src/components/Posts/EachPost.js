import React from "react";
import Spinner from "../UI/Spinner";

const EachPost = ({currentPost}) => {
  const keys = Object.keys(currentPost);
  if(keys.length === 0){
    return(
      <Spinner />
    )
  }

  const all = {
    ...currentPost,
  };

  return (
      <div style={listStyle}>
        {keys.map((item) => {
          if (item !== "id") {
            return (
              <div key={item}>
                <li>{`${item}: ${all[item]}`}</li>
              </div>
            );
          }
        })}
      </div>
      
  );
};

const listStyle = {
  border: "1px solid black",
  margin: "1rem",
  padding: "1rem",
  borderRadius: "10px",
};

export default React.memo(EachPost);
