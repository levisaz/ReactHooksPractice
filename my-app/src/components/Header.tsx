import React from 'react'
import Button from './Button'
const Header = (props: any) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Button color="cyan" text="Add" />
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}


export default Header