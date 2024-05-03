/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ticketTabs: '',
}

const ticketTabs = createSlice({
  name: 'ticketTabs',
  initialState,
  reducers: {
    setTicketTabs(state, action) {
      state.ticketTabs = action.payload
    },
  },
})

export const { setTicketTabs } = ticketTabs.actions

export default ticketTabs.reducer
