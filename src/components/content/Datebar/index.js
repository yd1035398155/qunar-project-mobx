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
    // date新日期 now_date旧日期
    if (date === now_date) {
      return
    } else {
      setNowData(date)
      // 发送网络请求
      let request_list = []
      let xhr = new XMLHttpRequest()
      const baseURL = "http://localhost:8000/date?date=" + date
      xhr.open("get", baseURL)
      xhr.send()
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          let data = JSON.parse(xhr.response)
          for (let i in data) {
            request_list.push(data[i])
          }
          flightListStore.updateFlightList(request_list)
          //更新状态
          switch (bottombarStore.order) {
            case "recommand":
              flightListStore.recommandSort()
              break
            case "time":
              // 此时为从早到晚
              if (bottombarStore.T_state === 1) {
                // 0 正顺序
                flightListStore.timeSort(0)
              } else {
                // 1  逆顺序
                flightListStore.timeSort(1)
              }
              break
            case "price":
              if (bottombarStore.P_state === 1) {
                flightListStore.priceSort(0)
              } else {
                flightListStore.priceSort(1)
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
