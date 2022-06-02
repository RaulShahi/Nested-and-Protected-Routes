import React from "react";
import { Link } from "react-router-dom";

const userName = (props) => {
  const keys = Object.keys(props.currentPost);
  

  const all = {
    ...props.currentPost,
  };
  let iD = all.id;

  return (
      <div style={listStyle}>
          {all.Title}

        <div>
          <Link to={`/home/posts/details/${iD}`}>
            <button>Details</button>
          </Link>
        </div>
      </div>
      
  );
};

const listStyle = {
  border: "1px solid black",
  margin: "1rem",
  padding: "1rem",
  borderRadius: "10px",
};

export default React.memo(userName);
