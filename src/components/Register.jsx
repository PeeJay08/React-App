import { useState } from "react";
const Register = (props) => {
  const [userName, setUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("username", userName);
    setUserName("");
    props.onFormSwitch("login");
  };

  return (
    <div className="register-form">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Register Username: </label>
          <input
            type="text"
            value={userName}
            onChange={(event) => setUserName(event.target.value)}
            required
          />
        </div>

        <input type="submit" value="Register" />
      </form>
      <button
        className="login-here"
        onClick={() => props.onFormSwitch("login")}
      >
        Already have a username? Login Here!
      </button>
    </div>
  );
};
export default Register;
