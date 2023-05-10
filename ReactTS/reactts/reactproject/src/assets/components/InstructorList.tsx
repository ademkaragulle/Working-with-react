import React from 'react'



type instructorListType = {
    instructorNameLastNameList: {
        firstName: string;
        lastName: string;
    }[]
}

function InstructorList(props: instructorListType) {
    return (
        <div>
            {props.instructorNameLastNameList.map((item, index) => {
                return (
                    <h3 key={index}>
                        {item.firstName} {item.lastName}
                    </h3>)
            })}
        </div>
    )
}

export default InstructorList