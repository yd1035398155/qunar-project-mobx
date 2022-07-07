import React from "react"
import "./index.css"

export default class Bottombar extends React.Component {
  render() {
    return (
      <div className="bottombar">
        <div className="bottom-container">
          <div>
            <i className="iconfont icon-shaixuan"></i>
            <p>筛选</p>
          </div>
          <div>
            <i className="iconfont icon-paixu"></i>
            <p>推荐排序</p>
          </div>
          <div>
            <i className="iconfont icon-shijian"></i>
            <p>时间</p>
          </div>
          <div>
            <i className="iconfont icon-jiage"></i>
            <p>价格</p>
          </div>
        </div>
      </div>
    )
  }
}
