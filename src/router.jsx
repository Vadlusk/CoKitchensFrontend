import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Navbar'

import Home from './pages/Home'
import Calendar from './pages/Calendar'
import Kitchens from './pages/Kitchens'
import Stories from './pages/Stories'
import Team from './pages/Team'
import Contact from './pages/Contact'

const AppRouter = () => (
  <Router>
    <Navbar />

    <Route path="/" exact>    <Home /></Route>
    <Route path="/calendar">  <Calendar /></Route>
    <Route path="/kitchens">  <Kitchens /></Route>
    <Route path="/stories">   <Stories /></Route>
    <Route path="/team">      <Team /></Route>
    <Route path="/contact">   <Contact /></Route>
  </Router>
)

export default AppRouter
