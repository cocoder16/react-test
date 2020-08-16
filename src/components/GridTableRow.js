import React from 'react';

const GridTableRow = ({
    person
}) => (
    <tr>
        <th>{person.name}</th>
        <th>{person.age}</th>
        <th>{person.weight}</th>
    </tr>
);

export default GridTableRow;