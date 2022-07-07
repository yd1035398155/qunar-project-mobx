import "./assets/css/base.css"
import Topbar from "./components/common/Topbar"
import Databar from "./components/content/Datebar"
import Flightlist from "./components/content/Flightlist"
import Bottombar from "./components/common/Bottombar"
function App() {
  let state = { from: "重庆", to: "北京" }
  return (
    <div className="App">
      <Topbar from={state.from} to={state.to} />
      <Databar />
      <Flightlist />
      <Bottombar />
    </div>
  )
}

export default App
