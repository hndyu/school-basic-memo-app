import React from 'react'

const Button = (props) => {
    return (
        <div>
            <button onClick={props.btn_click}>{props.btn_txt}</button>
        </div>
    )
}

export default Button