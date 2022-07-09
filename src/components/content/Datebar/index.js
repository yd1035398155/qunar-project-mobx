import React from "react"
import Dataitem from "../Dataitem"
import "./index.css"
import { throttle } from "../../../assets/js/utils"
import { NavLink } from "react-router-dom"
export default class databar extends React.Component {
  constructor(props) {
    super(props)
    this.databar = React.createRef()
    this.Handlescroll = this.Handlescroll.bind(this)
  }
  Handlescroll() {
    if (document.documentElement.scrollTop > 0) {
      this.databar.current.style.top = -14 + "px"
    } else {
      this.databar.current.style.top = 44 + "px"
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", throttle(this.Handlescroll))
  }
  render() {
    return (
      <div className="data-wrapper" ref={this.databar}>
        {/* <Dataitem />
        <Dataitem />
        <Dataitem />
        <Dataitem />
        <Dataitem /> */}
        <NavLink to="/A">
          <Dataitem />
        </NavLink>
        <NavLink to="/B">
          <Dataitem />
        </NavLink>
        <NavLink to="/C">
          <Dataitem />
        </NavLink>
        <NavLink to="/D">
          <Dataitem />
        </NavLink>
        <NavLink to="/F">
          <Dataitem />
        </NavLink>
        <div className="more-data">
          <div className="geli"></div>
          <i className="iconfont icon-riqi"></i>
          <p>更多日期</p>
        </div>
      </div>
      // <Routes className="data-wrapper" ref={this.databar}>
      //   <Route path="/" element={<Dataitem />}></Route>
      //   <Link to="/">a</Link>
      //   <Route path="/one" element={<Dataitem />}></Route>
      //   <Link to="/one">b</Link>

      // </Routes>
    )
  }
}
