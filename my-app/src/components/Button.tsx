import React from 'react'

const Button = ({ color, text }: any) => {

    const onClick = (e: any) => {
        console.log('clicked')
    }
    return (
        <button className='button' style={{ backgroundColor: color }} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button