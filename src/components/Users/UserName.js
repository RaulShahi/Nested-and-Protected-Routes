import React from "react";
import { Link } from "react-router-dom";

const userName = (props) => {
  const keys = Object.keys(props.currentUser);
  

  const all = {
    ...props.currentUser,
  };
  let iD = all.id;

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

        <div>
          <Link to={`users/details/${iD}`}>
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
