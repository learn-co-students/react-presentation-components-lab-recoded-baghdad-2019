// Code SimpleComponent Here
import React from 'react'
class SimpleComponent  extends React.Component {
    constructor() {
      super();
        this.state = {
            mood:"happy"
      };
    }
    handelClick=()=>{
        this.setState({
            mood:this.state.mood==="happy"?"sad":"happy"
        })
    }
    render() {
        return <div onClick={this.handelClick} >{this.state.mood}</div>
    }
  }
  export default SimpleComponent 