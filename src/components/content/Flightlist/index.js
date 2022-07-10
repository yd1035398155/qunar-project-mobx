import React from "react"
import "./index.css"
import Flightlistrow from "../Flightlistrow"
import { connect } from "react-redux"
import { createUpdateAction } from "../../../redux/action"
class Flightlist extends React.Component {
  componentDidMount() {
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
        this.props.updata({ state: 0, data: request_list })
      }
    }
  }
  render() {
    return (
      <div className="flight-content">
        <ul className="flight-list">
          {/* {this.props.data.r_data.map((a, index) => {
            return (
              <Flightlistrow
                key={index}
                from_info={a.from_info}
                to_info={a.to_info}
                company_info={a.company_info}
                price_info={a.price_info}
              />
            )
          })} */}

          {this.props.data === undefined ? (
            <></>
          ) : (
            this.props.data.r_data.map((a, index) => {
              return (
                <Flightlistrow
                  key={index}
                  from_info={a.from_info}
                  to_info={a.to_info}
                  company_info={a.company_info}
                  price_info={a.price_info}
                />
              )
            })
          )}
        </ul>
      </div>
    )
  }
}
export default connect((state) => ({ data: state }), { updata: createUpdateAction })(Flightlist)
