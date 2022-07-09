import React from "react"
import "./index.css"
import { throttle } from "../../../assets/js/utils"

export default class Bottombar extends React.Component {
  constructor(props) {
    super(props)
    this.btmbar = React.createRef()
    this.Handlescroll = this.Handlescroll.bind(this)
  }
  Handlescroll() {
    if (document.documentElement.scrollTop > 0) {
      this.btmbar.current.style.bottom = -44 + "px"
    } else {
      this.btmbar.current.style.bottom = 0
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", throttle(this.Handlescroll))
  }
  render() {
    return (
      <div className="bottombar" ref={this.btmbar}>
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
