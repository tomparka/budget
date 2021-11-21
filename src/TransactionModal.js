import React from "react";
import './TransactionModal.scss';

export default class TransactionModal extends React.Component {

    // Get the <span> element that closes the modal
    // closeModal() {
    //     // When the user clicks on <span> (x), close the modal
    //     var modal = document.getElementById("myModal");
    //     modal.style.display = "none";
    // }

    render() {
        if (!this.props.display) {
            return null;
        }
        return (
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                </div>
            </div>
        );
    }
}