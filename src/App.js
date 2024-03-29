import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Crypto from './components/Crypto'
import InnerCoin from './components/InnerCoin'
import Nav from './components/Nav'


function App() {

  const [coins, setCoins] = useState([])

  const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoins(response.data)
      // console.log(response.data[0])
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={<Crypto coins={coins} />} />
        <Route path='/coin' element={<InnerCoin />}>
          <Route path=':coinId' element={<InnerCoin />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;