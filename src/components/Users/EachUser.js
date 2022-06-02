import React from "react";
import Spinner from "../UI/Spinner";

const EachUser = ({currentUser}) => {
  const keys = Object.keys(currentUser);
 
  if(keys.length === 0){
    return(
      <Spinner />
    )
  }
  
  keys.splice(5,2,'City','Suite','Street','ZipCode','Company','CatchPhrase','BS');
  

  const [street,suite,city,zipcode,] = currentUser.Address;
  const{Street} = street;
  const {Suite} = suite;
  const {City} = city;
  const {ZipCode}= zipcode;
  const{Company,CatchPhrase,BS} = currentUser.Company;
  const all = {
    ...currentUser,
    City,
    Street,
    Suite,
    ZipCode,
    Company,
    CatchPhrase,
    BS
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

export default React.memo(EachUser);
