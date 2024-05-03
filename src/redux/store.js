/* eslint-disable import/no-extraneous-dependencies */
// eslint-disable-next-line import/no-extraneous-dependencies
import { configureStore } from '@reduxjs/toolkit'
import filterTabsReducer from './slices/filterTabs'
import ticketTabsReducer from './slices/ticketTabs'
import ticketsDataReducer from './slices/ticketsData'

const store = configureStore({
  reducer: {
    filterTabs: filterTabsReducer,
    ticketTabs: ticketTabsReducer,
    ticketsData: ticketsDataReducer,
  },
})

export default store
