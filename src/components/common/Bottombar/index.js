import React from "react"
import "./index.css"
import { throttle } from "../../../assets/js/utils"
import { connect } from "react-redux"
import { createRecommandSortAction, createTimeSortAction, createPriceSortAction } from "../../../redux/action"

class Bottombar extends React.Component {
  constructor(props) {
    super(props)
    this.btmbar = React.createRef()
    this.state = {
      order: "paixu",
      itemname: {
        shaixuan: "筛选",
        paixu: "推荐排序",
        shijian: "时间",
        jiage: "价格",
      },
    }
  }
  Handlescroll = () => {
    if (document.documentElement.scrollTop > 0) {
      this.btmbar.current.style.bottom = -44 + "px"
    } else {
      this.btmbar.current.style.bottom = 0
    }
  }
  changeOrder = (key) => {
    let list = [...this.props.data.r_data]
    let { T_state, P_state } = this.props.data
    // console.log(type, "T_state:", T_state, "P_state:", P_state)
    //推荐排序
    if (key === "paixu") {
      // 修改文字内容
      this.setState({
        itemname: {
          ...this.state.itemname,
          shijian: "时间",
          jiage: "价格",
        },
      })
      // 修改当前排序状态
      this.setState({ order: "paixu" })
      // 修改redux数据
      this.props.recommandSort({ state: 0, data: list })
    }
    // 时间排序
    else if (key === "shijian") {
      this.setState({ order: "shijian" })
      if (T_state === 0) {
        this.setState({
          itemname: {
            ...this.state.itemname,
            shijian: "从早到晚",
            jiage: "价格",
          },
        })
        this.props.timeSort({ state: 1, data: list })
      } else {
        this.setState({
          itemname: {
            ...this.state.itemname,
            shijian: "从晚到早",
            jiage: "价格",
          },
        })
        this.props.timeSort({ state: 0, data: list })
      }
    } else if (key === "jiage") {
      this.setState({ order: "jiage" })
      // 当前状态为0,当前状态为 初始态 或者 高到低 则变为 从低到高排序
      if (P_state === 0) {
        this.setState({
          itemname: {
            ...this.state.itemname,
            jiage: "从低到高",
            shijian: "时间",
          },
        })
        this.props.priceSort({ state: 1, data: list })
      }
      // 当前状态为1,则从 低到高  变为  高到低
      else {
        this.setState({
          itemname: {
            ...this.state.itemname,
            jiage: "从高到低",
            shijian: "时间",
          },
        })
        this.props.priceSort({ state: 0, data: list })
      }
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", throttle(this.Handlescroll))
  }
  render() {
    const { order, itemname } = this.state
    return (
      <div className="bottombar" ref={this.btmbar}>
        <div className="bottom-container">
          {Object.keys(itemname).map((key, index) => {
            return (
              <div key={index} className={order === key ? "active" : ""} onClick={() => this.changeOrder(key)}>
                <i className={order === key ? `iconfont icon-${key} active` : `iconfont icon-${key}`}></i>
                <p>{itemname[key]}</p>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
export default connect(
  (state) => ({
    data: state,
  }),
  {
    recommandSort: createRecommandSortAction,
    timeSort: createTimeSortAction,
    priceSort: createPriceSortAction,
  }
)(Bottombar)
