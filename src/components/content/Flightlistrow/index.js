import React from "react"
import "./index.css"
export default class Flightlistrow extends React.Component {
  render() {
    const { from_info, to_info, company_info, price_info } = this.props
    return (
      <li className="list-row">
        <div className="list-info">
          <div className="airpot-info">
            <div className="from-info">
              <p className="from-time time-font">
                {from_info.hour < 10 ? "0" + from_info.hour : from_info.hour}:
                {from_info.minite < 10 ? "0" + from_info.minite : from_info.minite}
              </p>
              <p className="from-place">{from_info.place}</p>
            </div>
            <div className="time-info">
              <div className="arrow-right"></div>
            </div>
            <div className="to-info">
              <p className="to-time time-font">
                {to_info.hour < 10 ? "0" + to_info.hour : to_info.hour}:
                {to_info.minite < 10 ? "0" + to_info.minite : to_info.minite}
              </p>
              <p className="to-place">{to_info.place}</p>
            </div>
          </div>
          <div className="company-info">
            <span>{company_info}</span>
          </div>
        </div>
        <div className="price">
          <p className="price-info">￥{price_info.price}</p>
          <p className="more-info">{price_info.more_info}</p>
        </div>
      </li>
    )
  }
}
