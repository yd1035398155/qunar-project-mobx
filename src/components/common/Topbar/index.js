import React from "react"
import "./index.css"
export default class Topbar extends React.Component {
  quit = () => {
    alert("退出")
  }
  render() {
    return (
      <div className="topbar">
        <div className="left" onClick={this.quit}>
          &lt;
        </div>
        <div className="middle">
          {this.props.from}-&gt;{this.props.to}
        </div>
        <div className="right">
          <i className="iconfont icon-sousuo"></i>
        </div>
      </div>
    )
  }
}
