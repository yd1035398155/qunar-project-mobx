import React from "react"
import "./index.css"
import Flightlistrow from "../Flightlistrow"
export default class Flightlist extends React.Component {
  constructor(props) {
    super(props)
    this.content = React.createRef()
  }
  // myRef = React.createRef()
  // myRef2 = React.createRef()
  // myRef3 = React.createRef()

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  handleScroll() {
    console.log(this.content)
  }
  render() {
    return (
      <div className="flight-content" ref={this.content}>
        <ul className="flight-list" ref={this.myRef2}>
          <Flightlistrow ref={this.myRef3} />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
          <Flightlistrow />
        </ul>
      </div>
    )
  }
}
