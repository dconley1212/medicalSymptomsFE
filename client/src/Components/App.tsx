import React from "react";
import ToDo from "./ToDo";
import LandingPage from "./LandingPage";
import { Route, Routes } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";

//left off trying to figure out the redux-toolkit file structure and how you would
// go about fixing your current file structure and if you need to follow it to a tee
// before moving forward

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

function App() {
  return (
    <div>
      <Routes>
        <Route path="/todolist" element={<ToDo />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
