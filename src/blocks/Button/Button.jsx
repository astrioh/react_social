import React from 'react';
import s from './Button.module.css';

const Button = (props) => {
    return (
        <button onClick={props.clickFunction} className={s.button + ' ' + s[props.size]}>{props.text}</button>
    );
}

export default Button;