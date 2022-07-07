import React from "react"
import Dataitem from "../Dataitem"
import "./index.css"
export default class databar extends React.Component {
  render() {
    return (
      <div className="data-wrapper">
        <Dataitem />
        <Dataitem />
        <Dataitem />
        <Dataitem />
        <Dataitem />
      </div>
    )
  }
}
