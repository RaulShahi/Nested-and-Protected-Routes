import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "../components/Header/MainHeader.module.css";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/auth-slice";

const Home = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = ()=>{
    dispatch(authActions.logout());
    localStorage.removeItem('token');
  };
  return (
    <div style={divStyle}>
      <header className={classes.header}>
        <nav>
          <ul>
            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/home"
                end
              >
                Users
              </NavLink>
            </li>

            <li>
              <NavLink
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
                to="/home/posts"
              >
                Posts
              </NavLink>
            </li>

            {!isAuthenticated && (
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/home/login"
                >
                  Login
                </NavLink>
              </li>
            )}

            {isAuthenticated && (
              <li>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? classes.active : ""
                  }
                  to="/home/login"
                  onClick={logoutHandler}
                >
                 Logout
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <Outlet />
    </div>
  );
};

const divStyle = {
  marginTop: "2rem",
};

export default Home;
