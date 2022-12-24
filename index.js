//  <script>
//     const heading = document.createElement("h1");
//     heading.innerHTML = "Hello World in JS";
//     const root = document.getElementById("root");
//     root.append(heading);
//   </script>

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
  { id: "title", class: "container" },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
