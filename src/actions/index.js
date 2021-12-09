import axios from 'axios'

export const getAssets = () => {
    return (dispatch) => {
        dispatch({ type: fetchStart() });

        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res => {
                console.log(res.data)
                dispatch(fetchSuccess(res.data))
            })
            .catch(err => {
                console.error(err)
                dispatch(fetchError(err))
            })
    }
}

export const FETCH_START = "FETCH_START";

export const fetchStart = () => {
    return ({ type: FETCH_START });
}

export const FETCH_SUCCESS = "FETCH_SUCCESS"

export const fetchSuccess = (item) => {
    return ({ type: FETCH_SUCCESS, payload: item })
}

export const FETCH_ERROR = "FETCH_ERROR"

export const fetchError = (error) => {
    return ({ type: FETCH_ERROR, payload: error })
}