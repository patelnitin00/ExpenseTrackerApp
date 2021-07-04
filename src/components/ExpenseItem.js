import './ExpenseItem.css'

function ExpenseItem(){
    return(
        <div className="expense-item">
            <div>Jube 29, 2021</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">$280.90</div>
            </div>
        </div>
    );
}

export default ExpenseItem;