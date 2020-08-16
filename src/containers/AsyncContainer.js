import React, {useRef} from 'react';
import {Async} from '../components';
import useAsync from '../hooks/useAsync';
import '../styles/Async.css';

const makeRequest = (method, url) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function () {
            if (200 <= this.status & this.status < 300) {
                let responseData = JSON.parse(xhr.response);
                const data = {
                    city: responseData.city,
                    weather: responseData.current.weather,
                    date: responseData.current.date.split('T')[0],
                    image_url: responseData.image_url
                };
                resolve(data);
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
};

const getCityInfo = async (city) => {
    return await makeRequest('get', `https://abnormal-weather-api.herokuapp.com/cities/search?city=${city}`);
};

const AsyncContainer = () => {
    //ajax 
    const [state, refetch] = useAsync(getCityInfo, ['Seoul'], []); //refetch를 호출하면 getCityInfo가 실행
    //active 클래스 조작을 위한 ref
    const activeBtn = useRef();
    const prevActiveBtn = useRef();

    //active class 변경
    const setActiveCity = curBtn => {
        //class active변경
        prevActiveBtn.current = activeBtn.current;
        activeBtn.current = curBtn;
        prevActiveBtn.current.className = '';
        activeBtn.current.className = 'active';
    };

    const handleCityBtnClick = e => {
        const city = e.target.textContent;
        refetch([city]);
        setActiveCity(e.target);
    };

    return (
        <Async
            loading={state.loading}
            data={state.data}
            handleCityBtnClick={handleCityBtnClick}
            activeBtn={activeBtn}
        />
    )
};

export default AsyncContainer;