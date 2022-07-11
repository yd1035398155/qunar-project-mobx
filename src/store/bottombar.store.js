import { makeAutoObservable } from "mobx"

class BottombarStore {
  order = "recommand"
  T_state = 0
  P_state = 0
  constructor() {
    makeAutoObservable(this)
  }
  setOrder = (str) => {
    this.order = str
  }
  setT = (num) => {
    this.T_state = num
  }
  setP = (num) => {
    this.P_state = num
  }
}

// const listStore = new ListStore()
export { BottombarStore }
