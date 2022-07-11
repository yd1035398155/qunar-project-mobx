import React, { useEffect, useState } from "react"
import Dateitem from "../Dateitem"
import "./index.css"
import { throttle } from "../../../assets/js/utils"
import { Link } from "react-router-dom"
import { useStore } from "../../../store"
import { observer } from "mobx-react-lite"

function Datebar() {
  const { bottombarStore, flightListStore } = useStore()
  // 旧状态的order
  // let { T_state, P_state } = bottombarStore
  const [now_date, setNowData] = useState("A")
  const [date_bar] = useState({
    A: { date: "7-11", week: "今天", price: 485 },
    B: { date: "7-12", week: "周二", price: 435 },
    C: { date: "7-13", week: "周三", price: 485 },
    D: { date: "7-14", week: "周四", price: 435 },
    E: { date: "7-15", week: "周五", price: 485 },
  })
  const datebarRef = React.useRef()
  function Handlescroll() {
    if (document.documentElement.scrollTop > 0) {
      datebarRef.current.style.top = -14 + "px"
    } else {
      datebarRef.current.style.top = 44 + "px"
    }
  }
  function changeDate(date) {
    bottombarStore.setOrder("update")
    // date新日期 now_date旧日期
    if (date === now_date) {
      return
    } else {
      setNowData(date)
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
          console.log(1)
          //更新redux中的状态
          switch (bottombarStore.order) {
            case "update":
              console.log(2)
              flightListStore.updateFlightList(request_list)
              bottombarStore.setT(0)
              bottombarStore.setP(0)
              break
            case "recommand":
              flightListStore.recommandSort()
              bottombarStore.setT(0)
              bottombarStore.setP(0)
              break
            case "time":
              // 点的时间排序,上一次不是时间排序
              if (bottombarStore.T_state === 1) {
                // this.props.timeSort({ state: 1, data: request_list })
                flightListStore.updateFlightList(flightListStore.timeSort(bottombarStore.T_state))
                bottombarStore.setT(1)
                bottombarStore.setP(0)
              } else {
                // 点的时间排序,上一次是时间排序
                // this.props.timeSort({ state: 0, data: request_list })
                flightListStore.updateFlightList(flightListStore.timeSort(bottombarStore.T_state))
                bottombarStore.setT(0)
                bottombarStore.setP(0)
              }
              break
            case "price":
              if (bottombarStore.P_state === 1) {
                // this.props.priceSort({ state: 1, data: request_list })
                flightListStore.updateFlightList(flightListStore.priceSort(bottombarStore.P_state))
                bottombarStore.setT(0)
                bottombarStore.setP(1)
              } else {
                // 点的时间排序,上一次是时间排序
                // this.props.priceSort({ state: 0, data: request_list })
                flightListStore.updateFlightList(flightListStore.priceSort(bottombarStore.P_state))
                bottombarStore.setT(0)
                bottombarStore.setP(0)
              }
              break
            default:
              break
          }
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", throttle(Handlescroll))
  }, [])

  return (
    <div className="date-wrapper" ref={datebarRef}>
      {Object.keys(date_bar).map((key, index) => {
        return (
          <Link to={key} key={index} onClick={() => changeDate(key)} className={now_date === key ? "active" : ""}>
            <Dateitem date_info={date_bar[key]} />
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
export default observer(Datebar)
