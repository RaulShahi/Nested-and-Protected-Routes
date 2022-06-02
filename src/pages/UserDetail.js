import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "../components/Users/UsersList.module.css";
import Card from "../components/UI/Card/Card";
import EachUser from "../components/Users/EachUser";
import { Fragment } from "react";

const UserDetail = () => {
  const params = useParams();
  const [userDetail, setUserDetail] = useState({});
  console.log(userDetail);
  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${params.uid}`
      );
      const data = await response.data;
      console.log(data);

      const modifiedData = {
        id: data.id,
        Name: data.name,
        Email: data.email,
        Contact: data.phone,
        Username: data.username,
        Address: [
          { Street: data.address.street },
          { Suite: data.address.suite },
          { City: data.address.city },
          { ZipCode: data.address.zipcode },
        ],
        Company: {
          Company: data.company.name,
          CatchPhrase: data.company.catchPhrase,
          BS: data.company.bs,
        },
      };

      setUserDetail(modifiedData);
    };
    getAllUsers();
  }, [params]);

  return (
    <Fragment>
      <Link to="/home" style={linkStyle}>
        <button>Back</button>
      </Link>
      <Card className={classes.words}>
        <EachUser currentUser={userDetail} />
      </Card>
    </Fragment>
  );
};

const linkStyle = {
  margin: "0",
};
export default UserDetail;
