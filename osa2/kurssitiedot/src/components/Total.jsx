import React from 'react'

function getSum(total, num) {
    return total + num;
}

const Total = ({value}) => {
    return (
        <p>yhteensä {value.map(cnt => cnt.exercises).reduce(getSum)} tehtävää</p>
    )
}

export default Total