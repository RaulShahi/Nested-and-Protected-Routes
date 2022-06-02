import { userActions } from "./user-slice";
import { postSliceActions } from "./post-slice";

export const fetchUsersList = () => {
  return async (dispatch) => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Could not fetch users data");
      }
      const data = await response.json();
      const categories = ["User", "Client", "Admin"];
      const transformedData = data.map((item) => {
        return {
          id: item.id,
          Name: item.name,
          Category: categories[Math.floor(Math.random() * 3)],
        };
      });
      return transformedData;
    };

    try {
      const users = await fetchUsers();
      dispatch(userActions.setUsers(users));
    } catch (error) {
      return;
    }
  };
};

export const fetchPostsList = ()=>{
  return async(dispatch)=>{
    const fetchPosts = async()=>{
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if(!response.ok){
        throw new Error('Could not fetch Posts');
      }
      const data = await response.json();
      const transformedData = data.map((item)=>{
        return{
          id:item.id,
          Title:item.title,
        }
      });
      return transformedData;
    }
    try{
      const posts = await fetchPosts();
      dispatch(postSliceActions.setPosts(posts));
    }catch(error){
      return;
    }
  }
}
