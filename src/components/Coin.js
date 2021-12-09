import React from "react"
import { combineReducers } from "redux"
export const Coin = (props) => {
    const { coin } = props
    return (
        <>
            <div>
                <h3>{coin.name}</h3>
                <img src={coin.image} />
                <p>Abbreviation: {coin.symbol}</p>
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
