import { TIME, PRICE, RECOMMAND, UPDATE } from "./constant"
export const createTimeSortAction = ({ state = 0, data }) => ({
  type: TIME,
  state,
  data,
})
export const createPriceSortAction = ({ state = 0, data }) => ({
  type: PRICE,
  state,
  data,
})
export const createRecommandSortAction = ({ state = 0, data }) => ({
  type: RECOMMAND,
  state,
  data,
})
export const createUpdateAction = ({ state = 0, data }) => ({
  type: UPDATE,
  state,
  data,
})
