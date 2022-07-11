import { makeAutoObservable } from "mobx"

class DatebarStore {
  List = ["vue", "react"]
  constructor() {
    makeAutoObservable(this)
  }
  addList = () => {
    this.List.push("angular")
  }
}

// const listStore = new ListStore()
export { DatebarStore }
