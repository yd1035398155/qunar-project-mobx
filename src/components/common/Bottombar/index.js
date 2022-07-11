import React, { useEffect, useState } from "react"
import "./index.css"
import { throttle } from "../../../assets/js/utils"
import { useStore } from "../../../store"
import { observer } from "mobx-react-lite"
function Bottombar() {
  const { bottombarStore } = useStore()
  let { T_state, P_state } = bottombarStore
  const btmbar = React.useRef()
  const [itemname, setItem] = useState({
    shaixuan: "筛选",
    recommand: "推荐排序",
    time: "时间",
    price: "价格",
  })
  function Handlescroll() {
    if (document.documentElement.scrollTop > 0) {
      btmbar.current.style.bottom = -44 + "px"
    } else {
      btmbar.current.style.bottom = 0
    }
  }
  function changeOrder(key) {
    //推荐排序

    if (key === "recommand") {
      // 修改文字内容
      setItem({
        ...itemname,
        time: "时间",
        price: "价格",
      })
      // 修改当前排序状态
      bottombarStore.setOrder("recommand")
      bottombarStore.setT(0)
      bottombarStore.setP(0)
    }
    // 时间排序
    else if (key === "time") {
      bottombarStore.setOrder("recommand")
      if (T_state === 0) {
        setItem({
          ...itemname,
          time: "从早到晚",
          price: "价格",
        })
        bottombarStore.setOrder("time")
        bottombarStore.setT(1)
        bottombarStore.setP(0)
      } else {
        setItem({
          ...itemname,
          time: "从晚到早",
          price: "价格",
        })
        bottombarStore.setOrder("time")
        bottombarStore.setT(0)
        bottombarStore.setP(0)
      }
    } else if (key === "price") {
      bottombarStore.setOrder("price")
      // 当前状态为0,当前状态为 初始态 或者 高到低 则变为 从低到高排序
      if (P_state === 0) {
        setItem({
          ...itemname,
          time: "时间",
          price: "从低到高",
        })
        bottombarStore.setT(0)
        bottombarStore.setP(1)
      }
      // 当前状态为1,则从 低到高  变为  高到低
      else {
        setItem({
          ...itemname,
          time: "时间",
          price: "从高到低",
        })
        bottombarStore.setT(0)
        bottombarStore.setP(0)
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", throttle(Handlescroll))
  }, [])

  return (
    <div className="bottombar" ref={btmbar}>
      <div className="bottom-container">
        {Object.keys(itemname).map((key, index) => {
          return (
            <div key={index} className={bottombarStore.order === key ? "active" : ""} onClick={() => changeOrder(key)}>
              <i
                className={
                  bottombarStore.order === key
                    ? `iconfont icon-${key === "time" ? "shijian" : key === "price" ? "jiage" : "paixu"} active`
                    : `iconfont icon-${key === "time" ? "shijian" : key === "price" ? "jiage" : "paixu"}`
                }
              ></i>
              <p>{itemname[key]}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default observer(Bottombar)
