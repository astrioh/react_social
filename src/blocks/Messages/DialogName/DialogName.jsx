import React from 'react';
import s from './DialogName.module.css';
import { NavLink } from 'react-router-dom';

const DialogName = props => {
    return (
        <div className={s.dialogName}>
            <NavLink activeClassName={s.active} to={'/messages/' + props.id}>
                <div className={s.dialogName__text}>
                    <img alt='Profile' src={props.profileImg} className={s.dialogName__profileImg} />
                    {props.name}
                </div>
            </NavLink>
        </div>
    );
}

export default DialogName;