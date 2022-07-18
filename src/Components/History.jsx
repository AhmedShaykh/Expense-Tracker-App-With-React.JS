function History() {

    let transaction = [
        { amount: 1000, desc: "Cash" },
        { amount: -250, desc: "Gas Bill" },
        { amount: -490, desc: "Medicines" }
    ]
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