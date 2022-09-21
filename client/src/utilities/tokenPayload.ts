import JWT, { JwtPayload } from "jwt-decode";

const getPayloadData = (token: string) => {
  if (token) {
    localStorage.setItem("token", token);
  }
};

export default getPayloadData;
