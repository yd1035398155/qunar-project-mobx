import React from "react"
import "./index.css"
export default class databar extends React.Component {
  render() {
    return (
      <div className="data-item">
        <span className="data">02-06</span>
        <span className="week">今天</span>
        <span className="price">￥437</span>
      </div>
    )
  }
}
