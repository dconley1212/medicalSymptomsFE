import React, { useState, useEffect } from "react";
// import styled from 'styled-components'

const CheckoutMessage = () => {
  const [member, setMember] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token !== null) {
      setMember(true);
    }
  }, []);

  return (
    <div>
      <h2>Thank you for your purchase!</h2>
      {member === true ? (
        <div>
          <p>Would you like to add a review?</p>
          <button>Add Review</button>
        </div>
      ) : (
        <div>
          <button>Become a member for 10% off your next purchase</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutMessage;
