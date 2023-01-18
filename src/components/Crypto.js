import React from 'react'
import CoinData from './CoinData'
import './Crypto.css'
import InnerCoin from './InnerCoin'
import { Link } from 'react-router-dom'


export default function Crypto (props) {
    return (
        <div className='container'>
            <div>
                <div className='header'>
                    <p>#</p>
                    <p className='coin'>Coin</p>
                    <p>Price</p>
                    <p>24h</p>
                    <p className='volume'>Volume</p>
                    <p className='cap'>Mkt Cap</p>
                </div>

                {props.coins.map(coins => {
                    return (
                        <div className='listing'>
    
                        <Link to={`/coin/${coins.id}`} element={<InnerCoin />} key={coins.id}>
                            <CoinData coins={coins} />
                        </Link>
                        </div>

                        

                    )
                })}


            

            </div>
        </div>
    )
}
