export default class Transaction {
    constructor(id, method, amount, description) {
    //   this.date = date;
      this.id = id;
      this.method = method;
      this.amount = amount;
      this.description = description;
    }
  }