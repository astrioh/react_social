import React from 'react';
import { sendMessageActionCreator, messageTextChangedActionCreator } from '../../../redux/messageReducer'
import MessageInput from './MessageInput';

const MessageInputContainer = (props) => {

    const messageTextChangeHandler = text => {
        props.dispatch(messageTextChangedActionCreator(text));
    };

    return (
        <MessageInput newMessageText={props.newMessageText} messageTextChangeHandler={messageTextChangeHandler} sendMessageHandler={props.dispatch.bind(null, sendMessageActionCreator())}/>
    );
}

export default MessageInputContainer;