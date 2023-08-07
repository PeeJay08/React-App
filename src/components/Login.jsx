/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const storedUsername = localStorage.getItem("username");
    if (storedUsername === userName) {
      navigate("/budgetplanner");
    } else {
      alert("This username is not yet registered");
    }
    setUserName("");
  };

  return (
    <div className="login-form">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Enter Username:</label>
          <input
            type="text"
            id="username"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </div>
        <input type="submit" value="Login" />
      </form>
      <button
        className="register-here"
        onClick={() => props.onFormSwitch("register")}
      >
        Don't have a username yet? Register Here!
      </button>
    </div>
  );
};
export default Login;
