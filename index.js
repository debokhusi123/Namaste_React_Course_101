
import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title", style: { color: "red", backgroundColor: "blue" } },
  "Hello World in React"
);
const heading2 = React.createElement(
  "h1",
  { id: "title", style: { color: "green", backgroundColor: "yellow" } },
  "Namaste React"
);
const container = React.createElement(
  "div",
  { id: "title",hellow:"test", class: "container" },//we can multiple things here which will behave like props not only id and class 
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

