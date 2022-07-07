import React from "react"
import "./index.css"
import sousuo from "../../../assets/img/sousuo.svg"
export default class Navbar extends React.Component {
  quit = () => {
    alert("退出")
  }
  render() {
    return (
      <div className="tabbar">
        <div className="left" onClick={this.quit}>
          &lt;
        </div>
        <div className="middle">
          {this.props.from}-&gt;{this.props.to}
        </div>
        <div className="right">
          <img src={sousuo} alt=""></img>
        </div>
      </div>
    )
  }
}
