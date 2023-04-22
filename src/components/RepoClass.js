import { Component } from "react";

class Repo extends Component {
  constructor(props) {
    super(props);
    console.log("In Repo Component(Child of Blog) - constructor")
  }
  componentDidMount() {
    this.timer = setInterval(()=>{
      console.log("Warning !!! I am printing for every 1 min !!! ")
    }, 1000);
    console.log("In Repo Component(Child of Blog) - componentDidMount");
  }
  componentDidUpdate() {
    console.log("In Repo Component(Child of Blog) - componentDidUpdate")
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    console.log("In Repo Component(Child of Blog) - componentWillUnmount")
  }
  render() {
    console.log("In Repo Component(Child of Blog) - render");
    console.log(this.props);
    const repo = this.props;
}
}

export default Repo;