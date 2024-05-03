/* eslint-disable consistent-return */
/* eslint-disable no-nested-ternary */
/* eslint-disable no-else-return */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { name: 'all', check: false },
  { name: 'noTransfers', check: false },
  { name: 'oneTransfers', check: true },
  { name: 'twoTransfers', check: false },
  { name: 'threeTransfers', check: false },
]
/*

I did it??

Wait...

I actually did it!!

!!THANK  YOU DEBBUGER

*/
const filterTabs = createSlice({
  name: 'filterTabs',
  initialState,
  reducers: {
    setFilterCheckbox(state, action) {
      const allChecked = !state[0].check
      if (action.payload === 'all') {
        if (allChecked) {
          return state.map((checkbox) => ({
            ...checkbox,
            check: checkbox.name === 'all' ? allChecked : allChecked,
          }))
        }
      } else {
        const newState = state.map((checkbox) =>
          checkbox.name === action.payload ? { ...checkbox, check: !checkbox.check } : checkbox
        )

        if (!newState.every((cb) => cb.check)) {
          newState[0] = { ...newState[0], check: false }
        }

        if (newState.slice(1).every((cb) => cb.check)) {
          newState[0] = { ...newState[0], check: true }
        }
        return newState
      }
    },
  },
})

const filterTabsReducer = filterTabs.reducer
export default filterTabsReducer

const { setFilterCheckbox } = filterTabs.actions
export { setFilterCheckbox }
