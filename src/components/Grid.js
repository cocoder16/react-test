import React from 'react';
import GridTableRow from './GridTableRow';

const Grid = ({
    //ref
    inputEle, tableEle,
    //state
    people,
    //function
    inputChangeHandler, handleArrowClick
}) => (
    <div className='grid'>
        <h2>Grid</h2>
        <input 
            ref={inputEle}
            type='text' 
            name='search'
            maxLength='10'
            placeholder='Please enter keywords'
            onChange={inputChangeHandler}
        />
        <table ref={tableEle}>
            <thead>
                <tr className='thead-tr'>
                    <th>name
                        <span className='arrow asc' onClick={handleArrowClick}></span>
                    </th>
                    <th>age
                        <span className='arrow asc' onClick={handleArrowClick}></span>
                    </th>
                    <th>weight
                        <span className='arrow asc' onClick={handleArrowClick}></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    people.map((cur, i) => <GridTableRow key={i} person={cur}/>)
                }
            </tbody>
        </table>
    </div>
);

export default Grid;