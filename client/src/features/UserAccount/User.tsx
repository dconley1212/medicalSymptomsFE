import React, { useState } from "react";
import { useAppSelector } from "../../app/hooks";
import UserInfo from "./UserInfo";

const UserAccount = () => {
  const [showUser, setShowUser] = useState<boolean>(false);
  const userInfo = useAppSelector((state) => state.user);

  const handleUserInfoClick = () => {
    setShowUser(true);
  };

  return (
    <div>
      <div>
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
