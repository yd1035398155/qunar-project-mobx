import React from "react"
import "./assets/css/base.css"
import Topbar from "./components/common/Topbar"
import Databar from "./components/content/Datebar"
import Flightlist from "./components/content/Flightlist"
import Bottombar from "./components/common/Bottombar"
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { from: "重庆", to: "北京" }
  }

  render() {
    return (
      <div className="App">
        <Topbar from={this.state.from} to={this.state.to} />
        <Databar />
        <Flightlist />
        <Bottombar />
      </div>
    )
  }
}

export default App
