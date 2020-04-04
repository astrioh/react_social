import React from 'react';
import Button from '../../Button/Button';
import s from './MessageInput.module.css';

const MessageInput = (props) => {
    const updateMessageText = e => {
        let text = e.target.value;
        props.messageTextChangeHandler(text);
    }

    return (
        <div className={s.messageInput}>
            <textarea onChange={updateMessageText} value={props.newMessageText} placeholder='Write a message...' className={s.messageInput__input} name="message" cols="100" rows="2"></textarea>
            <Button clickFunction={props.sendMessageHandler} text='Send message' />
        </div>
    );
}

export default MessageInput;