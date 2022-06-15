import React from "react";
import "./App.css";

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

let ageornone: number | string;

function printName(name: string) {
  console.log(name);
}

let changeName: (name: String) => void;

type Person = {
  name: string;
  age?: number;
};

let person: Person = {
  name: "Dave",
};

let lotsOfPeople: Person[];

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
