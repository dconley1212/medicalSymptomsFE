import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { insurance } from "./UserAccountSlice";
import { addInsuranceInfo } from "./UserAccountSlice";

const EditUserPaymentInfo = () => {
  const insuranceInfo = useAppSelector((state) => state.user.insuranceInfo);
  const [editInsuranceInfo, setEditInsuranceInfo] = useState<insurance>({
    nameForInsurance: "",
    insuranceCompany: "",
    insuranceFile: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleEditInsuranceInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditInsuranceInfo({
      ...editInsuranceInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitEditInsurance = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addInsuranceInfo(editInsuranceInfo));
    navigate("/user");
  };

  return (
    <div>
      <form onSubmit={handleSubmitEditInsurance}>
        <input
          name="nameForInsurance"
          type="text"
          onChange={handleEditInsuranceInfo}
          value={insuranceInfo.nameForInsurance}
          placeholder="Name on Insurance Card"
        />
        <input
          name="insuranceCompany"
          type="text"
          onChange={handleEditInsuranceInfo}
          value={insuranceInfo.insuranceCompany}
          placeholder="Insurance Company"
        />
        <input
          name="insuranceFile"
          type="file"
          onChange={handleEditInsuranceInfo}
          value={insuranceInfo.insuranceFile}
          placeholder="Add insurance file"
        />
        <button>Update Insurance Information</button>
      </form>
    </div>
  );
};

export default EditUserPaymentInfo;
