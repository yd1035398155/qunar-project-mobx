import React, { useEffect } from "react"
import { observer } from "mobx-react-lite"
import "./index.css"
import Flightlistrow from "../Flightlistrow"
import { useStore } from "../../../store"

function Flightlist() {
  const { flightListStore } = useStore()
  useEffect(() => {
    let request_list = []
    let A = "A"
    let xhr = new XMLHttpRequest()
    const baseURL = "http://192.168.2.171:8000/date?date=" + A
    xhr.open("get", baseURL)
    xhr.send()
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        let data = JSON.parse(xhr.response)
        for (let i in data) {
          request_list.push(data[i])
        }
        //更新redux中的状态
        flightListStore.updateFlightList(request_list)
      }
    }
  }, [flightListStore])

  return (
    <div className="flight-content">
      <ul className="flight-list">
        {flightListStore.getDate.map((a, index) => {
          return (
            <Flightlistrow
              key={index}
              from_info={a.from_info}
              to_info={a.to_info}
              company_info={a.company_info}
              price_info={a.price_info}
            />
          )
        })}
      </ul>
    </div>
  )
}
export default observer(Flightlist)
