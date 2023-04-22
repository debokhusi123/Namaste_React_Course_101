import React from "react";
import Social from './social';
import { GITHUB_GET_USER } from './config'; 

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    //console.log("Child - Constructor" + this.props.name);
  }

 async  componentDidMount() {
    // this.timer = setInterval(() => {
    //   console.log("NAMASTE REACT OP ");
    // }, 1000);

    //console.log("Child - componentDidMount");
    console.log("Profile Component - componentDidMount", this.props.name);//https://api.github.com/users/debokhusi123
    const data = await fetch (GITHUB_GET_USER + this.props.name);
    const json = await data.json();
  
    this.setState({
      userInfo : json
    })
  }

  componentDidUpdate(prevProps, prevState) {
    // if (this.state.count !== prevState.count) {
    //   //
    // }
    // if (this.state.count2 !== prevState.count2) {
    //   // code
    // }
    console.log("Component Did Update");
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    //console.log("ComponentWillUnmount");
  }

  render() {
//     const { count } = this.state;
//     //console.log("Child - render" + this.props.name);
//     return (
//       <div>
//         <h1> Profile Class Component </h1>
//         <img src={this.state.userInfo.avatar_url} />
//         <h2>Name: {this.state.userInfo.name}</h2>
//         <h2>Location: {this.state.userInfo.location}</h2>
//       </div>
//     );
//   }
const {userInfo} = this.state;
    console.log("Profile Component - render");
    return (
      <div className="profile-card"> 
        <div>
          {/* <img className="profile-img" src={userInfo.avatar_url} alt={userInfo.name} /> */}
          <img src={this.state.userInfo.avatar_url} />
          <h2>Name: {userInfo.name}</h2>
        </div>
        <div className="profile-details">
          {/* <p className="profile-bio">{userInfo.bio}</p> */}
          <h2>Github info: {userInfo.url}</h2>
          <h3> Login creds:{userInfo.login}</h3>

          <Social />
        </div>
   
      </div>
    )
  }
}

export default Profile
/**
 *
 *  child constructor
 *  child render
 *  child componentDidMount
 *
 *  API call
 *  Set State
 *
 *  <UPDATE CYCLES>
 *  render
 *
 *
 */
