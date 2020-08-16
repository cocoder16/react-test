import React, {useState, useEffect} from 'react';
import {Modals} from '../components';
import '../styles/Modals.css';

const modalAnimationStage = ['modal modal-enter', 'modal', 'modal modal-leave-active'];

const ModalsContainer = () => {
    const [isModalOn, setIsModalOn] = useState(false);
    const [animationStage, setAnimationStage] = useState(modalAnimationStage[0]);

    // 모달창을 꺼놨을 때에는 class를 애니메이션 시작단계로 바꿔놓음.
    useEffect(() => {
        if (!isModalOn) {
            setAnimationStage(modalAnimationStage[0]);
        }
    }, [isModalOn]);

    const turnOnModal = () => {
        setIsModalOn(true);
        setTimeout(() => {
            setAnimationStage(modalAnimationStage[1]);
        }, 0);
    };

    const turnOffModal = () => {
        //애니메이션 시간인 0.3초 뒤에 모달창 끄기
        setTimeout(() => {
            setIsModalOn(false);
        }, 300);
        setAnimationStage(modalAnimationStage[2]);
    };

    return (
        <Modals
            isModalOn={isModalOn}
            animationStage={animationStage}
            turnOnModal={turnOnModal}
            turnOffModal={turnOffModal}
        />
    )
}

export default ModalsContainer;