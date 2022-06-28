import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [account, setAccount] = useState<{ [x: string]: string }>({
    username: "",
    password: "",
    email: "",
    phone_number: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setAccount({ ...account, [name]: value });
    console.log(account);
  };
  const navigate = useNavigate();

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          {"Create Username: "}
          <input
            type="text"
            name="username"
            value={account.username}
            onChange={handleChange}
          />
        </label>
        <label>
          {"Create Password: "}
          <input
            type="password"
            name="password"
            value={account.password}
            onChange={handleChange}
          />
        </label>
        <label>
          {"Email: "}
          <input
            type="email"
            name="email"
            value={account.email}
            onChange={handleChange}
          />
        </label>
        <label>
          {" Phone Number:"}
          <input
            type="tel"
            name="phone_number"
            value={account.phone_number}
            onChange={handleChange}
          />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Register;
