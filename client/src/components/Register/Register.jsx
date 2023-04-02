import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import styles from "./Register.module.css";

export const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function onRegisterSubmit(e) {
    e.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("registration successful");
      setRedirect(true);
    } else {
      alert("registration failed, user required unique");
    }
    console.log(response);
  }
  if (redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <form className={styles.register} onSubmit={onRegisterSubmit}>
      <h1>Register</h1>
      <input
        type="text"
        name=""
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        id=""
        required
        placeholder="username"
      />
      <input
        type="password"
        name=""
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="password"
        id=""
      />
      <button>Register</button>
    </form>
  );
};
