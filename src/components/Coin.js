import React from "react"
export const Coin = (props) => {
    const { coin } = props
    return (
        <>
            <div>
                <h3>{coin.name}</h3>
                <img src={coin.image} />
            </div>
        </>
    )
}



export default Coin
