import axios from "axios";
const BASE_URL = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

const fetchUserRequest = () => {
    return {type: "FETCH-USER-REQUEST"}
}
const fetchUserSuccess = data => {
    return {type: "FETCH-USER-SUCCESS", payload: data}
}
const fetchUserFailure = err => {
    return {type: "FETCH-USER-FAILURE", payload: err}
}
export const fetchUsers = () => {
    return dispatch => {
        dispatch(fetchUserRequest())
        axios.get(BASE_URL)
            .then(res => {
                const data = res.data;
                dispatch(fetchUserSuccess(data))
            })
            .catch(err => {
                const errData = err.message;
                dispatch(fetchUserFailure(errData))
            })
    }
}
