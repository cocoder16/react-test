import React, {useState, useEffect} from 'react';
import Modal from './Modal';
import '../styles/Modals.css';

const Modals = () => {
    const [isModalOn, setIsModalOn] = useState(false);
    const [statusOfModal, setStatusOfModal] = useState('modal modal-enter'); //modal-enter, modal, modal-leave-active

    // 모달창을 꺼놨을 때에는 class를 애니메이션 시작단계로 바꿔놓음.
    useEffect(() => {
        if (!isModalOn) {
            setStatusOfModal('modal modal-enter');
        }
    }, [isModalOn]);

    const turnOnModal = () => {
        setIsModalOn(true);
        setTimeout(() => {
            setStatusOfModal('modal');
        }, 0);
    };

    const turnOffModal = () => {
        //애니메이션 시간인 0.3초 뒤에 모달창 끄기
        setTimeout(() => {
            setIsModalOn(false);
        }, 300);
        setStatusOfModal('modal modal-leave-active');
    };

    return (
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
                        statusOfModal={statusOfModal}
                    />
                }
            </span>
        </div>
    )
}

export default Modals;