import React, { useState } from "react";

const Register = () => {
  const [account, setAccount] = useState<{
    username: string;
    password: string;
    email: string;
    phone_number: string;
  }>({
    username: "",
    password: "",
    email: "",
    phone_number: "",
  });

  return (
    <div>
      <form>
        <label>
          {" "}
          Create Username:
          <input type="text" name="username" value={account.username} />
        </label>
        <label>
          {" "}
          Create Password:
          <input type="password" name="password" value={account.password} />
        </label>
        <label>
          {" "}
          Email:
          <input type="email" name="email" value={account.email} />
        </label>
        <label>
          {" "}
          Phone Number:
          <input type="tel" name="phone_number" value={account.phone_number} />
        </label>
      </form>
    </div>
  );
};

export default Register;
