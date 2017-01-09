import React, { Component } from 'react';
import ExpenseInput from './ExpenseInput';

class App extends Component {

    constructor(props) {
      super(props);
      this.state = { expenses: [] };
      console.log(this.state.expenses)
      this.addExpense = this.addExpense.bind(this);
    }

    //methods
    addExpense() {
      const amount = document.getElementById('amt').value;
      const category = document.getElementById('cat').value;
      const description = document.getElementById('descr').value;

      this.setState({ expenses: this.state.expenses.concat({ amt: amount, cat: category, descr: description }) });
    }


    render() {
        return (
            <div className="App">
                <ExpenseInput addExpense={this.addExpense}/>
            </div>
        );
    }
}

export default App;