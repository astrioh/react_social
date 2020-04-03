import React from 'react';
import s from './Message.module.css';

const Message = props => {
    return (
        <div className={s.message}>
            { props.incoming && <img className={s.message__senderImg} src={props.senderImg} alt='Other person' />}
            <div className={s.message__text}>
                {props.text}
            </div>
            { !props.incoming && <img className={s.message__senderImg} src={props.senderImg} alt='You' /> }
        </div>
    );
}

export default Message;