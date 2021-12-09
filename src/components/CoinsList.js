import React, { useEffect } from 'react';
import { getAssets } from '../actions';
import { connect } from 'react-redux';

const CoinList = ({ dispatch }) => {
    useEffect(() => {
        dispatch(getAssets());
    }, []);

    return (
        <>
            <h2>Coins</h2>
        </>
    )
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps)(CoinList)