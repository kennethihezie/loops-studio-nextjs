const { Component } = require("react");
const { default: Hero } = require("../components/Hero/hero");

export default class Home extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Hero />
    )
  }
}