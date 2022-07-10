import React from "react"
import "./index.css"
export default class dateitem extends React.Component {
  render() {
    const { date, week, price } = this.props.date_info
    return (
      <div className="date-item">
        <span className="date">{date}</span>
        <span className="week">{week}</span>
        <span className="price">￥{price}</span>
      </div>
    )
  }
}
