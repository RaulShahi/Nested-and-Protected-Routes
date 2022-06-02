import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import classes from "../components/Users/UsersList.module.css";
import Card from "../components/UI/Card/Card";
import EachPost from "../components/Posts/EachPost";
import { Fragment } from "react";

const UserDetail = () => {
  const params = useParams();
  const [postDetail, setPostDetail] = useState({});
  useEffect(() => {
    const getAllPosts = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${params.pid}`
      );
      const data = await response.data;
      console.log(data);

      const modifiedData = {
        id: data.id,
        Title: data.title,
        Description: data.body
      };

      setPostDetail(modifiedData);
    };
    getAllPosts();
  }, [params]);

  return (
    <Fragment>
      <Link to="/home/posts" style={linkStyle}>
        <button>Back</button>
      </Link>
      <Card className={classes.words}>
        <EachPost currentPost={postDetail} />
      </Card>
    </Fragment>
  );
};

const linkStyle = {
  margin: "0",
};
export default UserDetail;
