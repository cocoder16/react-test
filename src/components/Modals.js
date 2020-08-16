import React from 'react';
import Modal from './Modal';

const Modals = ({
    //state
    isModalOn, animationStage,
    //function
    turnOnModal, turnOffModal
}) => (
    <div className='modals'>
        <h2>Modals</h2>
        <button 
            className='button-show-modal'
            onClick={turnOnModal}
        >
            Show Modal
        </button>
        <span>
            {
                isModalOn && <Modal 
                    turnOff={turnOffModal} 
                    animationStage={animationStage}
                />
            }
        </span>
    </div>
)

export default Modals;