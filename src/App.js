import React from "react"
import "./assets/css/base.css"
import Topbar from "./components/common/Topbar"
import Datebar from "./components/content/Datebar"
import Flightlist from "./components/content/Flightlist"
import Bottombar from "./components/common/Bottombar"
export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { from: "重庆", to: "北京" }
  }
  render() {
    return (
      <div className="App">
        <Topbar from={this.state.from} to={this.state.to} />
        <Datebar />
        <Flightlist />
        <Bottombar />
      </div>
    )
  }
}
