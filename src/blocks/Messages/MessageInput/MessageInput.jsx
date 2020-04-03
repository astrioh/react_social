import React from 'react';
import Button from '../../Button/Button';
import s from './MessageInput.module.css';
import { sendMessageActionCreator, messageTextChangedActionCreator } from '../../../redux/messageReducer'


const MessageInput = (props) => {

    const messageTextChangeHandler = e => {
        let text = e.target.value;
        props.dispatch(messageTextChangedActionCreator(text));
    };

    return (
        <div className={s.messageInput}>
            <textarea onChange={messageTextChangeHandler} value={props.newMessageText} placeholder='Write a message...' className={s.messageInput__input} name="message" cols="100" rows="2"></textarea>
            <Button clickFunction={props.dispatch.bind(null, sendMessageActionCreator())} text='Send message' />
        </div>
    );
}

export default MessageInput;