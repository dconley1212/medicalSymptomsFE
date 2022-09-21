import jwt_decode, { JwtPayload } from "jwt-decode";

// type customJWTPayload = JwtPayload & {id: number}

const getPayloadData = (token: string) => {
  if (token) {
    localStorage.setItem("token", token);
    // localStorage.setItem('id', jwt_decode<customJWTPayload>(token))
  }
};

export default getPayloadData;
