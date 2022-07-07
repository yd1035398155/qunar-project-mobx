import React from "react"
import "./index.css"
export default class Flightlist extends React.Component {
  render() {
    return (
      <div className="flight-content">
        <ul className="flight-list">
          <li className="list-row">
            <div className="list-info">
              <div className="airpot-info">
                <div className="from-info">
                  <p className="from-time time-font">07:25</p>
                  <p className="from-place">江北T3</p>
                </div>
                <div className="time-info">
                  <p className="howlong"></p>
                  <div className="plane-info">
                    <div className="arrow-right"></div>
                    <span className=""></span>
                  </div>
                </div>
                <div className="to-info">
                  <p className="to-time time-font">23:00</p>
                  <p className="to-place">首都T1</p>
                </div>
              </div>
              <div className="company-info">
                <span></span>
              </div>
            </div>
            <div className="price">
              <p className="price-info">￥555</p>
              <p className="more-info">经济舱</p>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}
