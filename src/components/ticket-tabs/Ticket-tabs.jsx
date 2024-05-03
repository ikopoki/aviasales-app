/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import classes from './ticket-tabs.module.scss'
import { setTicketTabs } from '../../redux/slices/ticketTabs'

export default function TicketTabs() {
  const dispatch = useDispatch()
  const activeFilter = useSelector((state) => state.ticketTabs.ticketTabs)

  function handleTicketsFilter(name) {
    dispatch(setTicketTabs(name))
  }

  const maxId = () => Math.random().toString(36).slice(2)

  const buttons = [
    { name: 'cheap', label: 'САМЫЙ ДЕШЕВЫЙ', classNames: `${classes['btn-tabs']} ${classes['btn-left']}` },
    { name: 'fast', label: 'САМЫЙ БЫСТРЫЙ', classNames: [classes['btn-tabs']] },
    { name: 'optimal', label: 'ОПТИМАЛЬНЫЙ', classNames: `${classes['btn-tabs']} ${classes['btn-right']}` },
  ]

  return (
    <div className={classes.tabs}>
      {buttons.map(({ name, label, classNames }) => (
        <button
          key={maxId()}
          className={activeFilter === name ? `${classNames} ${classes['btn-active']}` : classNames}
          type="button"
          onClick={() => handleTicketsFilter(name)}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
