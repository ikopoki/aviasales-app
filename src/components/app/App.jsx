/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import './App.scss'
import React from 'react'
import { Alert, Spin } from 'antd'
import { useSelector } from 'react-redux'
import Header from '../header/header.tsx'
import TicketTabs from '../ticket-tabs/Ticket-tabs'
import FilterTabs from '../filter-tabs/Filter-tabs'
import TicketsList from '../ticket-list/Ticket-list'

function LoadingMessage({ message, type }) {
  return (
    <Alert
      message={message}
      type={type}
      className='alert-app'
    />
  )
}

export default function App() {
  const stopSearch = useSelector((state) => state.ticketsData.stop)
  return (
    <div className="App">
      <Header />
      {!stopSearch && (
        <>
          <Spin size="large" className='spin-app' />
          <LoadingMessage message="Билеты подгружаются, но часть из них вы уже можете посмотреть!" type="warning" />
        </>
      )}
      {stopSearch && <LoadingMessage message="Все билеты успешно загружены, приятного путешествия!" type="success" />}
      <TicketTabs />
      <FilterTabs />
      <TicketsList />
    </div>
  )
}
