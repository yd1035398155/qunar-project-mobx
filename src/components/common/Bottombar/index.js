import React from "react"
import "./index.css"

export default class Bottombar extends React.Component {
  constructor(props) {
    super(props)
    this.myref = null
  }
  add() {
    console.log(this.myref)
  }
  render() {
    return (
      <div className="bottombar" onClick={this.add}>
        <div
          className="bottom-container"
          ref={(arg) => {
            this.myref = arg
          }}
        >
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
