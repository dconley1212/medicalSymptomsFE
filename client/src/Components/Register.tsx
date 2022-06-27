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
          <input value={account.username} />
        </label>
        <label>
          {" "}
          Create Password:
          <input value={account.password} />
        </label>
        <label>
          {" "}
          Email:
          <input value={account.email} />
        </label>
        <label>
          {" "}
          Phone Number:
          <input value={account.phone_number} />
        </label>
      </form>
    </div>
  );
};

export default Register;
