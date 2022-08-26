const initialState = {
    selectItem: [],
    loading: false,
    error: ""
}

const coinsReducer = (state = initialState, action) => {
    switch(action.type){
        case "FETCH-USER-REQUEST":
            return {
                ...state,
                loading: true
            }
        case "FETCH-USER-SUCCESS":
            return {
                loading: false,
                selectItem: action.payload
            }
        case "FETCH-USER-FAILURE":
            return {
                loading: false,
                selectItem: [],
                error: action.payload
            }
        default:
            return state;
    }
}

export default coinsReducer;