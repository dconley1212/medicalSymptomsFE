import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [login, setLogin] = useState<{ [x: string]: string }>({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLogin({ ...login, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>ConleyCare</h2>
        <h3>Please Sign In</h3>
        <input
          placeholder="email"
          name="email"
          value={login.email}
          onChange={handleChange}
        />
        <input
          placeholder="password"
          name="password"
          value={login.password}
          onChange={handleChange}
        />
        <button></button>
      </form>
    </div>
  );
};

export default Login;
