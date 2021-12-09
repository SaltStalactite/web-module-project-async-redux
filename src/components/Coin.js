import React from "react"
import { combineReducers } from "redux"
export const Coin = (props) => {
    const { coin } = props
    return (
        <>
            <div className='coinContainer'>
                <h3>{coin.name}</h3>
                <img className='coinLogos' src={coin.image} alt='coin symbol' />
                <p>Abbreviation: {coin.symbol}</p>
                <p>Market Cap Rank: {coin.market_cap_rank}</p>
                <p>Market Cap: {coin.market_cap}</p>
                <p>Current Price: {coin.current_price}</p>
                <p>Circulating Supply: {coin.circulating_supply}</p>
                <p>Total Supply: {coin.total_supply}</p>
                <p>All Time High: {coin.ath}</p>
                <p>24 Hour High: {coin.high_24h}</p>
                <p>24 Hour Low: {coin.low_24h}</p>
            </div>
        </>
    )
}



export default Coin
