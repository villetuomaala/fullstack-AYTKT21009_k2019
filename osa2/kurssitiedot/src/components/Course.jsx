import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    
    return (
        <>
        <Header value={course.name}/>
        <Content value={course.parts}/>
        <Total value={course.parts}/>
        </>
    )
}

export default Course