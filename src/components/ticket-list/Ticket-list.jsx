/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { Alert } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useState, useEffect, useMemo } from 'react'
import Ticket from '../ticket/Ticket'
import classes from './ticket-list.module.scss'
import fetchTickets, { getId } from '../../services/getTickets'
import utilsFilter from '../../utilities/filterTickets'
import utilsSort from '../../utilities/sortedTickets'

export default function TicketsList() {
  const dispatch = useDispatch()

  const { ticketsData, stop: stopTickets, searchId } = useSelector((state) => state.ticketsData)
  const filterTransfers = useSelector((state) => state.filterTabs)
  const activeFilter = useSelector((state) => state.ticketTabs.ticketTabs)

  const [ticketsCount, setTicketsCount] = useState(5)

  const maxId = () => Math.random().toString(36).slice(2)

  useEffect(() => {
    if (!stopTickets && searchId) {
      const timer = setInterval(() => {
        dispatch(fetchTickets(searchId))
      }, 200)

      return () => {
        clearInterval(timer)
      }
    }

    return () => undefined
  }, [dispatch, searchId, stopTickets])

  useEffect(() => {
    dispatch(getId())
  }, [dispatch])

  const sortedTickets = useMemo(() => utilsSort(ticketsData, activeFilter), [ticketsData, activeFilter])

  const filterTickets = useMemo(() => utilsFilter(filterTransfers, sortedTickets), [filterTransfers, sortedTickets])

  return (
    <>
      <ul>
        {filterTickets.slice(0, ticketsCount).map((ticket) => (
          <Ticket key={maxId()} ticket={ticket} />
        ))}
      </ul>
      {filterTickets.length ? (
        <button
          type="button"
          className={classes['btn-show-more']}
          onClick={() => setTicketsCount((prevCount) => prevCount + 5)}
        >
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </button>
      ) : (
        <Alert
          style={{ marginLeft: 'auto', marginRight: 'auto', width: '500px' }}
          message="К сожалению, рейсы не найдены, попробуйте выбрать другие фильтры!"
          type="warning"
        />
      )}
    </>
  )
}
