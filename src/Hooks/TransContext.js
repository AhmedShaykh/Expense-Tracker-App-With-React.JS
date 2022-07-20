import { createContext, useReducer } from "react";
import TransactionsReducer from "./TransReducer";

const intialTransactions = [
    { amount: 1000, desc: "Cash" },
    { amount: -250, desc: "Gas Bill" },
    { amount: -490, desc: "Medicines" }
]

export const TransactionsContext = createContext(intialTransactions);

export const TransactionsProvider = ({}) => {
    let [state, dispatch] = useReducer(TransactionsReducer, intialTransactions);

    function addTransactions(transObj) {
        dispatch({
            type: "ADD_TRANSACTIONS",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
        return(
            <TransactionsContext.Provider value="">

            </TransactionsContext.Provider>
        )
    }
}