import React from "react"
// import { useStore } from "./store"
import { observer } from "mobx-react-lite"
import "./assets/css/base.css"
import Topbar from "./components/common/Topbar"
import Datebar from "./components/content/Datebar"
import Flightlist from "./components/content/Flightlist"
import Bottombar from "./components/common/Bottombar"

function App() {
  return (
    <div className="App">
      <Topbar from={"重庆"} to={"北京"} />
      <Datebar />
      <Flightlist />
      <Bottombar />
    </div>
  )
}
export default observer(App)
