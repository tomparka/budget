import Table from './Table';
import Transaction from './models/Transaction';
import TransactionModal from './TransactionModal';
import './App.css';

function App() {

  const mockTransactions = [
    new Transaction(1, 'chase', 10.00, 'mock1'),
    new Transaction(2, 'venmo', 1.00, 'mock2'),
    new Transaction(3, 'cash', 0.10, 'mock3'),
  ];

  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");

  let displayTransactionModal = false;

  // When user clicks, open modal
  const openModal = () => {
    var modal = document.getElementById("myModal");
    // modal.style.display = "block";
    displayTransactionModal = true;
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = (event) => {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
      // modal.style.display = "none";
      displayTransactionModal = false;
    }
  }

  // let addTransactionModal;
  // if (displayTransactionModal) {
  //   addTransactionModal = <TransactionModal />;
  // };

  return (
    <div className="App">
      <div className="section-add-entry">
        Add new transaction?
        <button onClick={openModal}>Add</button>
      </div>
      <Table data={mockTransactions} />
      <TransactionModal display={displayTransactionModal} />

    </div>

  );

}

export default App;
