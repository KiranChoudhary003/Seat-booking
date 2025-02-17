import React from 'react'
// import Header from './components/Header'
import Form from './components/Form'
import { BrowserRouter, Route, Routes } from 'react-router'
import SeatBooking from './components/SeatBooking'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element = { <Header /> }/> */}
        <Route path='/' element = { <Form /> }/>
        <Route path='/seatBooking' element = { <SeatBooking /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
