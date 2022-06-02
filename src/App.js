import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes, Navigate } from "react-router-dom";

import { fetchUsersList, fetchPostsList } from "./store/fetch-action";
import MainHeader from "./components/Header/MainHeader";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import UserDetail from "./pages/UserDetail";
import NotFound from "./pages/NotFound";
import UserListPage from "./pages/UserListPage";
import PostsListPage from "./pages/PostsListPage";
import PostsDetailPage from "./pages/PostDetailPage";
import FormPage from "./pages/Form-page";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchUsersList());
    dispatch(fetchPostsList());
  }, [dispatch]);
  return (
    <>
      <MainHeader />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="home" element={<Home />}>
            
            <Route index element={<UserListPage />} />
            <Route path="posts" element={<PostsListPage />} />
            <Route path="login" element={<FormPage />} />
            <Route
              path="users/details/:uid"
              element={
                <ProtectedRoute  >
                    <UserDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="posts/*"
              element={
                <ProtectedRoute>
                  <Routes>
                    <Route path="details/:pid" element={<PostsDetailPage />} />
                    
                  </Routes>
                </ProtectedRoute>
              }
            />
          </Route>
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
    </>
  );
};

export default App;
