import { useContext } from 'react';
import { TransactionsContext } from '../Hooks/TransContext';

function History() {
    let { transaction } = useContext(TransactionsContext);
    return (
        <div className="history">
            <h2>
                History
            </h2>
                <hr />
                    <h3>
                        <ul className="transaction-list">
                            {transaction.map((obj, ind) => {
                                return (<li key={ind}>
                                    <span>{obj.desc}</span>
                                    <span>{obj.amount}</span>
                                </li>)
                            })}
                        </ul>
                    </h3>
        </div>
    )
}

export default History;