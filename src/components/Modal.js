import React from 'react';

const Modal = ({
    turnOff, statusOfModal
}) => (
    <div className={statusOfModal}>
        <div className='modal-mask'>
            <div className='modal-wrapper'>
                <div className='modal-container'>
                    <h3>Modal Header</h3>
                    <p>Modal Body</p>
                    <button onClick={turnOff}>OK</button>
                </div>
            </div>
        </div>
    </div>
)

export default Modal;