import { TIME, PRICE, RECOMMAND, UPDATE } from "./constant"
export default function reducer(preState = [], action) {
  const { type, data, state } = action
  // console.log("preState为", preState)
  // console.log("action为", action)
  let data_list
  if (data === undefined) {
    data_list = data
  } else {
    data_list = [...data]
  }
  switch (type) {
    case TIME:
      // 将变为1,早到晚
      if (state === 1) {
        data_list.sort((a, b) => {
          if (a.from_info.hour < b.from_info.hour) {
            return -1
          } else if (a.from_info.hour > b.from_info.hour) {
            return 1
          } else {
            return a.from_info.minite - b.from_info.minite
          }
        })
        return { T_state: 1, P_state: 0, r_data: data_list, type: TIME }
      } else {
        return { T_state: 0, P_state: 0, r_data: data_list.reverse(), type: TIME }
      }

    case PRICE:
      // return data_list.sort((a, b) => {
      //   return a.price_info.price - b.price_info.price
      // })
      if (state === 1) {
        data_list.sort((a, b) => {
          return a.price_info.price - b.price_info.price
        })
        return { T_state: 0, P_state: 1, r_data: data_list, type: PRICE }
      } else {
        return { T_state: 0, P_state: 0, r_data: data_list.reverse(), type: PRICE }
      }

    case RECOMMAND:
      data_list.sort((a, b) => {
        return a.price_info.price - b.price_info.price
      })
      return { T_state: 0, P_state: 0, r_data: data_list, type: RECOMMAND }

    case UPDATE:
      return { T_state: 0, P_state: 0, r_data: data_list, type: UPDATE }
    default:
      break
  }
}
