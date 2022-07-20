const TransactionsReducer = ((state, action) => {
    switch(action.type){
        case "ADD_TRANSACTIONS": {
            return [action.payload, ...state]
        }
        default:
            return state;
    }
})

export default TransactionsReducer;