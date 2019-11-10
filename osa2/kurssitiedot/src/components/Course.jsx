import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({courses}) => {
    return (
        <div>
            {courses.map((course) => (
                <div key={course.id}>
                    <Header value={course.name}/>
                    <Content value={course.parts}/>
                    <Total value={course.parts}/>
                </div>
            ))}
        </div>
    )
}

export default Course