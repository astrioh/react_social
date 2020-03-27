import React from 'react';
import s from './DialogName.module.css';
import { NavLink } from 'react-router-dom';

const DialogName = props => {
    return (
        <div className={s.dialogName}>
            <NavLink activeClassName={s.active} to={'/messages/' + props.id}>{props.name}</NavLink>
        </div>
    );
}

export default DialogName;