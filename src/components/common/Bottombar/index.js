import React from "react"
import "./index.css"
import shaixuan from "../../../assets/img/shaixuan.svg"
import paixu from "../../../assets/img/paixu.svg"
import shijian from "../../../assets/img/shijian.svg"
import jiage from "../../../assets/img/jiage.svg"
export default class Bottombar extends React.Component {
  render() {
    return (
      <div className="bottombar">
        <div className="bottom-container">
          <div>
            <img src={shaixuan} alt="" />
            <p>筛选</p>
          </div>
          <div>
            <img src={paixu} alt="" />
            <p>推荐排序</p>
          </div>
          <div>
            <img src={shijian} alt="" />
            <p>时间</p>
          </div>
          <div>
            <img src={jiage} alt="" />
            <p>价格</p>
          </div>
        </div>
      </div>
    )
  }
}
