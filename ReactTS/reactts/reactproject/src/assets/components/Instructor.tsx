import React from 'react'
import { instructorPros } from './propstypes'

function Instructor(props: instructorPros) {
    return (
        <div>
            {props.instructorNameLastName.firstName} {' '}
            {props.instructorNameLastName.lastName}
        </div>
    )
}

export default Instructor