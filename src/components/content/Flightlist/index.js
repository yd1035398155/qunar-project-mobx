import React from "react"
import "./index.css"
import Flightlistrow from "../Flightlistrow"
export default class Flightlist extends React.Component {
  constructor(props) {
    super(props)
    this.ulRef = React.createRef()
    this.Handlescroll = this.Handlescroll.bind(this)
  }
  componentDidMount() {
    window.addEventListener("scroll", this.Handlescroll)
  }
  Handlescroll() {
    console.log(this.ulRef.current.getBoundingClientRect().top)
  }
  render() {
    return (
      <div className="flight-content">
        <ul className="flight-list" ref={this.ulRef}>
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
          <Flightlistrow />
        </ul>
      </div>
    )
  }
}
