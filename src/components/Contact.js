import { Component} from 'react'
class Contact extends Component {
    constructor(props) { 
        super(props)
        this.state = {
        }
    }
    render() {
        
        return (
            <h1>Name: {this.props.name}</h1>
            
        )
    }
   
}
export default Contact