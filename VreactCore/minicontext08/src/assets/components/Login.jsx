import React, { useState, useContext } from "react";
import userContext from "../context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <div>
      <h1>Welcome To login page</h1>
      <input
        type="text"
        onChange={(e) => setUserName(e.target.value)}
        value={username}
        placeholder="Enter your UserName"
      />
      <br />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Enter your Password"
      />
      <br />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default Login;
