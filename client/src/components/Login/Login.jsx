import React, { useContext, useState } from "react";
import styles from "./Login.module.css";
import { Navigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  async function onSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      const data = await response.json();
      setUserInfo(data);
      setRedirect(true);
      // console.log(data);
    } else {
      alert("wrong credentials");
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <form className={styles.login} onSubmit={onSubmit}>
      <h1>LogIn</h1>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        name=""
        id=""
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        name=""
        id=""
      />
      <button>Login</button>
    </form>
  );
}

export default Login;
