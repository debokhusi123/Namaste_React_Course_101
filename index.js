/**
 *
 * HMR - Hot Module Replacement - parcel keeps track of file changes via file watcher algorithm and renders the changes in the files
 * File watcher algorithm - made with C++
 * MINIFY
 * BUNDLING
 * Cleaning our code
 * DEV and production Build
 * Super fast building algorithm
 * does image optimization also
 * Caching while development
 * Compresses
 * Compatible with older version of browser
 * HTTPS in dev
 * port Number
 * Consistent hashin algorithm
 * Zero Config
 * Tree Shaking - Removing un-wanted code.
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
//Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// const header = React.createElement(
//   "div",
//   { className: "title" },//we can multiple things here which will behave like props not only id and class

// [
//   React.createElement(
//   "h1",
//   {},
//   "Hi there"
// ),
// React.createElement(
//   "h2",
//   {},
//   "Welcome to react"
// ),
//  React.createElement(
//   "h3",
//   {},
//   "This is the nested reactCreateElement block"
// ),
// ],
// );
//Create the same element using JSX
// const header = (
// <div>
//   <h1>Hi there</h1>
//   <h2>Welcome to react</h2>
//   <h3>This is the nested reactCreateElement block</h3>
//   </div>
//   );
//Create a functional component of the same with JSX.
// const HeaderComponent = () => {
//   return (
//     <div>
//       <h1>Hi there</h1>
//       <h2>Welcome to react</h2>
//       <h3>This is the nested reactCreateElement block</h3>
//     </div>
//   );
// };
//Pass attributes into the tag in JSX
// const HeaderComponent = () => {
//   return (
//     <div>
//       <h1 className="first">Hi there</h1>
//       <h2 id="second">Welcome to react</h2>
//       <h3 style={{ color: "blue" }}>
//         {" "}
//         This is the nested reactCreateElement block
//       </h3>
//     </div>
//   );
// };
//Composition of Component(Add a component inside another)
// const PageComponent = () => {
//   return (
//     <div>
//       <HeaderComponent />
//       <h1>This is where the content goes</h1>
//     </div>
//   );
// };
const LogoComponent = () => {
  return (
    // <a class="active" href="#"> <img src={require("./assets/image1.jpeg")} className="logo" /> Home</a>
    <div id="logo">
    <img src={require("./assets/image1.jpeg")} className="logo" alt="logo"/>
    </div>
  );
};
const SearchComponent = () => {
  return (
    <div id="search">
    <input type='text'  className='search' placeholder="Search your destination" autofocus="true"/>
    </div>
  );
};
const UserComponent = () => {
  return (
    <div id="icon">
      <svg class="icon" viewBox="0 0 20 20">
							<path d="M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z"></path>
						</svg>
    </div>
  );
};

const NavheaderComponent = () => {
  return (
    <div class="header">
      <LogoComponent />
      <SearchComponent />
      <UserComponent/>
      {/* <h1>This is where the content goes</h1> */}
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(header);
root.render(<NavheaderComponent />);
