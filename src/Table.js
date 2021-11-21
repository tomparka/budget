import React from "react";

export default class Table extends React.Component {

    render() {
        return (
            <div className="section-table">
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th>Method</th>
                            <th>Amount</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.data.map(transaction =>
                            <tr key={transaction.id}>
                                <td>{transaction.method}</td>
                                <td>{transaction.amount}</td>
                                <td>{transaction.description}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}