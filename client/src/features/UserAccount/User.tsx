import React, { useState } from "react";
import UserInfo from "./UserInfo";

const UserAccount = () => {
  const [showUser, setShowUser] = useState<boolean>(false);

  const handleUserInfoClick = () => {
    setShowUser(true);
  };

  return (
    <div>
      <div className="user tab">
        <button onClick={handleUserInfoClick}>
          Add your info for a faster checkout!
        </button>
        {showUser === true ? (
          <div>
            <UserInfo />
          </div>
        ) : null}
        <button>News</button>
      </div>
    </div>
  );
};
export default UserAccount;
