import React from "react"
import "./index.css"

export default class Bottombar extends React.Component {
  constructor(props) {
    super(props)
    this.mybody = React.createRef()
    this.mybody2 = React.createRef()
    this.add = this.add.bind(this)
  }
  add() {
    this.mybody.current.style.bottom = -44 + "px"
  }

  render() {
    return (
      <div className="bottombar" ref={this.mybody} onClick={this.add}>
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
