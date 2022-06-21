import React from "react"
import "./index.css"

export default class Navbar extends React.Component {
  state = { from: "重庆", to: "北京" }
  render() {
    return (
      <div className="tabbar">
        <div className="left">&lt;</div>
        <div className="middle">
          {this.state.from}-&gt;{this.state.to}
        </div>
        <div className="right">
          <img src="~assets/img/sousuo.svg" alt="搜索"></img>
        </div>
      </div>
    )
  }
}
