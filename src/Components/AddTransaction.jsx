const AddTransaction = () => {
    return (
        <div className="history">
            <form className="transaction-form">
                <label>
                    <h3>Enter Description <br /></h3>
                    <input type="text" placeholder="Add Transaction" className="input" required/>
                </label>
                <label>
                    <h3>Enter Amount <br /></h3>
                    <input type="number" placeholder="Add Amount" className="input" required/>
                </label>
                <button className="button">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;