import React from "react";
import "../App.css";
import ToDo from "./ToDo";
import LandingPage from "./LandingPage";
import styled from "styled-components";
import { Route, Routes, Link } from "react-router-dom";
import Register from "./Register";

// let name: string;
// let age: number;
// let isStudent: boolean;
// let hobbies: string[];
// let role: [number, string];

// let ageornone: number | string;

// function printName(name: string) {
//   console.log(name);
// }

// let changeName: (name: String) => void;

// // type Person = {
// //   name: string;
// //   age?: number;
// // };

// // let person: Person = {
// //   name: "Dave",
// // };

// // type x = {
// //   a: string,
// //   b: number,
// // }

// // type y = x & {
// //   c: string,
// //   d: number
// // }
// // below will throw an error because y includes x as a part of the structure
// // let j: y = {
// //   c: 'adflkdsj',
// //   d: 42,
// // }

// interface Person {
//   name: string,
//   age?: number,
// }
// interface Guy extends Person {
//   profession: string,
// }

// let lotsOfPeople: Person[];
const StyledHeader = styled.header`
  padding: 1rem;
  background: #4682b4;
  color: #faf0e6;
  font-size: 1.2rem;
`;

function App() {
  return (
    <div>
      <StyledHeader>
        <h2>ConleyCare</h2>
        <Link to="/register">Create Account</Link>
      </StyledHeader>
      <Routes>
        <Route path="/todolist" element={<ToDo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
