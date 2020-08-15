import React, {useState, useEffect, useRef} from 'react';
import GridTableRow from './GridTableRow';
import useInput from '../hooks/useInput';
import '../styles/Grid.css';

const Grid = () => {
    // state 초기화 값
    const initialPeople = [
        {
            name: 'Jack',
            age: 20,
            weight: 70
        },
        {
            name: 'Lee',
            age: 30,
            weight: 88
        },
        {
            name: 'Chuck',
            age: 17,
            weight: 75
        },
        {
            name: 'Ralph',
            age: 41,
            weight: 69
        },
        {
            name: 'Mark',
            age: 25,
            weight: 80
        }
    ];

    // 각 row를 원소로 할 people 배열
    const [people, setPeople] = useState(initialPeople);
    // 정렬 조작을 위해 필요한 active 변수와 colume 배열
    const [activatedColumn, setActivatedColumn] = useState(null); //columns의 인덱스 0, 1, 2
    const [sort, setSort] = useState('asc'); // asc, dsc
    const prevActivatedColumn = useRef(null);
    const [columns] = useState(['name', 'age', 'weight']);
    // 검색을 위해 필요한 검색문자열
    const [searchString, setSearchString] = useState('');
    const [inputEle, inputChangeHandler] = useInput(setSearchString);

    useEffect(() => {
        // class 재설정
        const trs = document.querySelector('.grid table').querySelectorAll('tr');
        trs.forEach(cur => {
            const ths = cur.querySelectorAll('th');
            if (ths[prevActivatedColumn.current]) {
                ths[prevActivatedColumn.current].className = '';
            }
            if (ths[activatedColumn]) {
                ths[activatedColumn].className = 'active';
            }
        });

        // 정렬함수는 name, age, weight 경우 다 같음.
        let sortFunc;
        if (sort === 'asc') {
            sortFunc = (a, b) => {
                return a[columns[activatedColumn]] < b[columns[activatedColumn]] ? -1 
                    : a[columns[activatedColumn]] > b[columns[activatedColumn]] ? 1 : 0;
            }
        } else if (sort === 'dsc') {
            sortFunc = (a, b) => {
                return a[columns[activatedColumn]] > b[columns[activatedColumn]] ? -1 
                    : a[columns[activatedColumn]] < b[columns[activatedColumn]] ? 1 : 0;
            }
        }

        // 정렬
        const sortedPeople = [...people];
        sortedPeople.sort(sortFunc);
        setPeople([...sortedPeople]);

    }, [activatedColumn, sort]);

    useEffect(() => {
        const searchedPeople = initialPeople.filter((cur, i) => {
            for (let i = 0; i < columns.length; i++) {
                if (String(cur[columns[i]]).toLowerCase().indexOf(searchString) !== -1) {
                    return true;
                } 
            }
            return false;
        });
        setPeople([...searchedPeople]);
    }, [searchString])

    // activatedColumn 변경
    const activeColumn = column => {
        prevActivatedColumn.current = activatedColumn;
        setActivatedColumn(column);
    };

    // arrow toggle 변경
    const toggleArrow = e => {
        const currentClass = e.target.classList;
        if (currentClass.contains('asc')) {
            currentClass.remove('asc');
            currentClass.add('dsc');
            setSort('dsc');
        } else {
            currentClass.remove('dsc');
            currentClass.add('asc');
            setSort('asc');
        }
        const column = e.target.parentNode.textContent;
        activeColumn(columns.indexOf(column));
    };
    
    return (
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
            <table>
                <thead>
                    <tr className='thead-tr'>
                        <th>name
                            <span className='arrow asc' onClick={toggleArrow}></span>
                        </th>
                        <th>age
                            <span className='arrow asc' onClick={toggleArrow}></span>
                        </th>
                        <th>weight
                            <span className='arrow asc' onClick={toggleArrow}></span>
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
    )
}

export default Grid;