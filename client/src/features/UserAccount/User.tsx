import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../app/hooks";
import UserInfo from "./UserInfo";

const UserAccount = () => {
  const userInfo = useAppSelector((state) => state.user.userInfo);
  const [showUser, setShowUser] = useState<boolean>(false);
  const [button, setButton] = useState<boolean>(true);

  useEffect(() => {
    if (userInfo.address === "") {
      setButton(false);
    }
  }, []);

  const handleUserInfoClick = () => {
    setShowUser(true);
  };

  return (
    <div>
      <div>
        <button onClick={handleUserInfoClick}>
          {button === false
            ? "Add your info for a faster checkout!"
            : "My Info"}
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
