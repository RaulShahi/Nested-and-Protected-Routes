import React, { useEffect, useState } from "react";
import Input from "../Input/Input";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { formActions } from "../../store/form-slice";
import { authActions } from "../../store/auth-slice";
import { PASSWORD, USERNAME } from "../../store/userPassword";

const Form = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("Location", location);
  const { username, password } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const [formIsInvalid, setFormIsInValid] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (username === USERNAME && password === PASSWORD) {
      setFormIsInValid(false);
      localStorage.setItem('token','loggedin');
      dispatch(formActions.clearInput());
      dispatch(authActions.login(true));
      navigate(`${location.state.from.pathname}`, { replace: true });
    } else {
      setFormIsInValid(true);
      console.log("Error in details");
    }
  };

  const changeHandler = (event) => {
    dispatch(
      formActions.userInput({
        val: event.target.value,
        name: event.target.name,
      })
    );
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <p>Please login to access details about users and posts.</p>
      <div>
        <Input
          id="username"
          label="Username"
          type="text"
          name="username"
          value={username}
          onChange={changeHandler}
        />
        <Input
          id="password"
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={changeHandler}
        />
        {formIsInvalid && <p>Either Username or Password is Wrong.</p>}

        <div className="form-actions">
          <button type="submit">Login</button>
        </div>
      </div>
    </form>
  );
};
const paraStyle = {
  color: "red",
};

export default Form;
