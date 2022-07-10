import React from "react"
import Dateitem from "../Dateitem"
import "./index.css"
import { throttle } from "../../../assets/js/utils"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { createRecommandSortAction, createTimeSortAction, createPriceSortAction, createUpdateAction } from "../../../redux/action"
import { TIME, PRICE, RECOMMAND, UPDATE } from "../../../redux/constant"
class datebar extends React.Component {
  constructor(props) {
    super(props)
    this.datebar = React.createRef()
    this.state = {
      now_date: "A",
      date_bar: {
        A: { date: "7-11", week: "今天", price: 485 },
        B: { date: "7-12", week: "周二", price: 435 },
        C: { date: "7-13", week: "周三", price: 485 },
        D: { date: "7-14", week: "周四", price: 435 },
        E: { date: "7-15", week: "周五", price: 485 },
      },
    }
  }
  Handlescroll = () => {
    if (document.documentElement.scrollTop > 0) {
      this.datebar.current.style.top = -14 + "px"
    } else {
      this.datebar.current.style.top = 44 + "px"
    }
  }
  changeDate = (date) => {
    const { T_state, P_state, type } = this.props.data
    const { now_date } = this.state
    if (date === now_date) {
      return
    } else {
      this.setState({ now_date: date })
      // 发送网络请求
      let request_list = []
      let xhr = new XMLHttpRequest()
      const baseURL = "http://192.168.2.171:8000/date?date=" + date
      xhr.open("get", baseURL)
      xhr.send()
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          let data = JSON.parse(xhr.response)
          for (let i in data) {
            request_list.push(data[i])
          }
          //更新redux中的状态
          switch (type) {
            case UPDATE:
              this.props.update({ state: 0, data: request_list })
              break
            case RECOMMAND:
              this.props.recommandSort({ state: 0, data: request_list })
              break
            case TIME:
              // 点的时间排序,上一次不是时间排序
              if (T_state === 1) {
                this.props.timeSort({ state: 1, data: request_list })
              } else {
                // 点的时间排序,上一次是时间排序
                this.props.timeSort({ state: 0, data: request_list })
              }
              break
            case PRICE:
              if (P_state === 1) {
                this.props.priceSort({ state: 1, data: request_list })
              } else {
                // 点的时间排序,上一次是时间排序
                this.props.priceSort({ state: 0, data: request_list })
              }
              break
            default:
              break
          }
          // console.log(request_list)
          // if (type === UPDATE || type === RECOMMAND) {

          // }
        }
      }
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", throttle(this.Handlescroll))
  }
  render() {
    return (
      <div className="date-wrapper" ref={this.datebar}>
        {Object.keys(this.state.date_bar).map((key, index) => {
          return (
            <Link
              to={key}
              key={index}
              onClick={() => this.changeDate(key)}
              className={this.state.now_date === key ? "active" : ""}
            >
              <Dateitem date_info={this.state.date_bar[key]} />
            </Link>
          )
        })}
        <div className="more-date">
          <div className="geli"></div>
          <i className="iconfont icon-riqi"></i>
          <p>更多日期</p>
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
    update: createUpdateAction,
  }
)(datebar)
