import React from 'react'

export default function CoinData (props){
    return (
        <div className='row'>
            <p className='number'>{props.coins.market_cap_rank}</p>
            <div className='icon'>
                <img src={props.coins.image} alt='' />
                <p className='crypto-name'>{props.coins.symbol.toUpperCase()}</p>
            </div>
            <p className='price'>${props.coins.current_price.toLocaleString()}</p>
            <p className='hours'>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
            <p className='volume'>${props.coins.total_volume.toLocaleString()}</p>
            <p className='cap'>${props.coins.market_cap.toLocaleString()}</p>
        </div>
    )
}

