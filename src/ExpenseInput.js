import React, { Component } from 'react';

class ExpenseInput extends Component {
    render() {
        return (
            <div>
                <input id="amt" type="number" placeholder="$"/>
                <input id="cat" type="text" placeholder="Category"/>
                <input id="descr" type="text" placeholder="Description"/>
                <button onClick={this.props.addExpense}>Add Expense</button>
            </div>
        );
    }
}

class ExpenseDisplay extends Components {

}


export default ExpenseInput;

