import React from "react";
import "../App.css";
import ToDo from "./ToDo";
import styled from "styled-components";

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

const ToDoPage = styled.div`
  background: #00bfff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <ToDoPage className="App">
      <ToDo />
    </ToDoPage>
  );
}

export default App;
