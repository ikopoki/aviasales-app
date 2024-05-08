/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getId = createAsyncThunk('tickets/fetchTickets', async () => {
    try {
        const result = await axios.get('https://aviasales-test-api.kata.academy/search')
        return result.data.searchId
    } catch(err) {
        console.error(err)
        throw err.message
    }
})

const fetchTickets = createAsyncThunk('ticketsData/fetchTickets', async (searchId) => {
    try {
        const result = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
        return result.data
    } catch (err) {
        console.error(err)
        throw err.message
    }
})

export default fetchTickets