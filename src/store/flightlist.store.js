import { computed, makeAutoObservable } from "mobx"
class FlightListStore {
  // 1.定义数据
  flight_list_data = []
  constructor() {
    // 2. 数据响应式
    makeAutoObservable(this, {
      getDate: computed,
    })
  }
  updateFlightList = (data) => {
    this.flight_list_data = data
  }
  // 定义计算属性
  get getDate() {
    console.log(JSON.parse(JSON.stringify(this.flight_list_data)))
    return JSON.parse(JSON.stringify(this.flight_list_data))
  }
  recommandSort = () => {
    this.priceSort(0)
  }
  priceSort = (state) => {
    let list = [...this.flight_list_data]
    list = JSON.parse(JSON.stringify(list))
    list.sort((a, b) => {
      return a.price_info.price - b.price_info.price
    })
    // 0正1反
    if (state === 1) {
      this.updateFlightList(list.reverse())
    } else {
      this.updateFlightList(list.reverse)
    }
  }
  timeSort = (state) => {
    let list = [...this.flight_list_data]
    list = JSON.parse(JSON.stringify(list))
    list.sort((a, b) => {
      if (a.from_info.hour < b.from_info.hour) {
        return -1
      } else if (a.from_info.hour > b.from_info.hour) {
        return 1
      } else {
        return a.from_info.minite - b.from_info.minite
      }
    })
    // 0正1反
    if (state === 1) {
      this.updateFlightList(list.reverse())
    } else {
      this.updateFlightList(list.reverse)
    }
  }
}
// 4.实例化
// const counterStore = new CounterStore()
export { FlightListStore }
