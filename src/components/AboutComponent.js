

// import { Outlet } from "react-router-dom";
// import ProfileFunctionalComponet from "./Profile";
// import Profile from "./Profile";
// import { Component } from "react";

// class About extends Component {
//   constructor(props) {
//     super(props);

//     //console.log("Parent - constructor");
//   }
//   componentDidMount() {
//     // Best place to make an Api call
//     //console.log("Parent - componentDidMount");
//   }

//   render() {
//     //console.log("Parent - render");
//     return (
//       <div>
//         <h1>About Us Page</h1>
//         <p>
//           This is the Namaste React Live Course Chapter 07 - Finding the Path 🚀
//         </p>
//         <ProfileFunctionalComponet />
//       </div>
//     );
//   }
// }

// export default About;
import ProfileClass from "./ProfileClass";
import BlogClass from "./BlogClass";
import {Component} from 'react'; /* One way to import named import - Component from React library */
import { GITHUB_USER_NAME, GITHUB_BLOG_NAME } from "./config";
class About extends Component {
  constructor(props) {
    super(props);
    console.log("About(parent) - constructor");
  }

  componentDidUpdate() {
    console.log("About Component - componentDidUpdate")
  }

  componentWillUnmount() {
    console.log("About Component - componentWillUnmount")
  }

  render() {
    console.log("About(parent) - render");

    return (
      <div className="about-container">
        <div className="profile-container">
          <h1 className="profile-title">About Me</h1>
          <ProfileClass name={GITHUB_USER_NAME}/>  { /* Passing props from parent to child */ }
        </div>
        <div className="blog-container">
          <h1 className="blog-list-title">About this project</h1>
          <BlogClass name={GITHUB_BLOG_NAME}/> { /* Passing props from parent to child */ }
        </div>  
      </div>
    )
  }
}

export default About;