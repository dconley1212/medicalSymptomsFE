import jwt_decode, { JwtPayload } from "jwt-decode";

interface MyTokenPaylod {
  username: string;
  id: string;
  key: string;
  passphrase: string;
  algorithm: string;
  expiresIn: string;
}

const getPayloadData = (token: string) => {
  if (token) {
    localStorage.setItem("token", token);
    localStorage.setItem("id", jwt_decode<MyTokenPaylod>(token)["id"]);
  }
};

export default getPayloadData;
