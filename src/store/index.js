// 组合子模块
import React from "react"
import { FlightListStore } from "./flightlist.store"
import { DatebarStore } from "./datebar.store"
import { BottombarStore } from "./bottombar.store"
class RootStore {
  constructor() {
    this.flightListStore = new FlightListStore()
    this.listStore = new DatebarStore()
    this.bottombarStore = new BottombarStore()
  }
}
// 实例化store注入react
const rootStore = new RootStore()
const context = React.createContext(rootStore)
// 导出useStore方法,供组件通过调用该方法使用根实例
const useStore = () => React.useContext(context)
export { useStore }
