import React from 'react'

function getSum(total, num) {
    return total + num;
}

const Total = (props) => {
    return (
        <p>yhteensä {props.value.map(cnt => cnt.exercises).reduce(getSum)} tehtävää</p>
    )
}

export default Total