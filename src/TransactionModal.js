import React from "react";
import './TransactionModal.scss';

export default class TransactionModal extends React.Component {
    render() {
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.props.close}>&times;</span>

                    <form>
                        <label>
                            Method:
                            <input type="text" />
                        </label>
                        <br />
                        <label>
                            Amount:
                            <input type="text" />
                        </label> 
                        <br />
                        <label>
                            Description:
                            <input type="text" />
                        </label>
                        <br />
                        <input type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        );
    }
}