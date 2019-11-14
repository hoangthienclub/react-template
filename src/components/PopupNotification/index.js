import React from 'react';
import Modal from 'react-modal';
import "./styles.scss"
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        padding: '0px',
        borderRadius: '8px'
    }
};
export default function ({ title, message, onClose, onOk, isOpen }) {
    return (
        <Modal
            isOpen={isOpen}
            // onAfterOpen={this.afterOpenModal}
            onRequestClose={onClose}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className="popup-notification">
                {/* <div className="popup-notification-header">
                    <div className="title">{title}</div>
                    <div className="close-icon">
                        <ion-icon name="ios-close"></ion-icon>
                    </div>
                </div> */}
                <div className="popup-body">{message}</div>
                <div className="actions">
                    {onOk && <div onClick={onOk} className="action ok-button">{"OK"}</div>}
                    {/* <div onClick={onOk} className="action ok-button">{"OK"}</div> */}
                    {onClose && <div onClick={onClose} className="action close-button">{"Close"}</div>}
                </div>
            </div>
        </Modal>
    )
}