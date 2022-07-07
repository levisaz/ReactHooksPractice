import React from 'react'
import { useState } from 'react'

const Tasks = ({ tasks: any }) => {


    return (

        <>
            {tasks.map((task: any) => (
                <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )
}

export default Tasks