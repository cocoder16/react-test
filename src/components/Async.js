import React from 'react';

const Async = ({
    //ref
    activeBtn,
    //state
    loading, data,
    //function
    handleCityBtnClick
}) => (
    <div className='async'>
        <h2>Async Actions</h2>
        <button ref={activeBtn} className='active' onClick={handleCityBtnClick}>Seoul</button>
        <button onClick={handleCityBtnClick}>Tokyo</button>
        <button onClick={handleCityBtnClick}>Beijing</button>
        <button onClick={handleCityBtnClick}>Toronto</button>
        {
            data && !loading ?
                <div className='wrapper'>
                    <p>City:<span>{data.city}</span></p>
                    <p>Weather:<span>{data.weather}</span></p>
                    <p>Date:<span>{data.date}</span></p>
                    <img src={data.image_url} alt='weather_img'/>
                </div>
                :
            <p className='loading'>Loading...</p>
        }
    </div>
);

export default Async;