import React, { useEffect } from 'react';
import { getAssets } from '../actions';
import { connect } from 'react-redux';
import Coin from './Coin';

const CoinList = (props) => {
    // const { dispatch } = props
    console.log(props.coins)
    useEffect(() => {
        props.dispatch(getAssets());
        console.log(props.coins)
    }, []);

    return (
        <>
            <h1>Coin Database</h1>
            {props.coins.map(coin => {
                return <Coin coin={coin} key={coin.id} />
            })}
        </>
    )
}

const mapStateToProps = state => {
    return {
        coins: state.coins
    }
}

export default connect(mapStateToProps)(CoinList)