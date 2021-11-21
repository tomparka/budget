import React from 'react';
import Table from './Table';
import Transaction from './models/Transaction';
import TransactionModal from './TransactionModal';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      mockTransactions: [
        new Transaction(1, 'chase', 10.00, 'mock1'),
        new Transaction(2, 'venmo', 1.00, 'mock2'),
        new Transaction(3, 'cash', 0.10, 'mock3'),
      ],
      displayTransactionModal: false
    }
  }

  openModal = () => {
    this.setState({displayTransactionModal: true});
  }

  closeModal = () => {
    this.setState({displayTransactionModal: false});
  }

  render() {
    return (
      <div className="App">
        <div className="section-add-entry">
          Add new transaction?
          <button onClick={this.openModal}>Add</button>
        </div>
        <Table data={this.state.mockTransactions} />
        {this.state.displayTransactionModal && <TransactionModal close={this.closeModal}/>}
      </div>

    );
  }
}

export default App;
