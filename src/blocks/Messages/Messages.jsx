import React from 'react';
import s from './Messages.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';
import MessageInput from './MessageInput/MessageInput';

const Messages = (props) => {

    let nameElements = props.messagePageData.nameData.map(e => <DialogName key={e.id.toString()} id={e.id} profileImg={e.profileImg} name={e.name} />);
    let messageElements = props.messagePageData.messageData.map(e => <Message key={e.id.toString()} text={e.text} incoming={e.incoming} senderImg={e.senderImg} />);
    return (
        <div className={s.messages}>
            <div className={s.messages__names}>
                {nameElements}
            </div>
            <div className={s.messages__text}>
                {messageElements}
            </div>
            <MessageInput newMessageText={props.messagePageData.newMessageText} dispatch={props.dispatch} />
        </div>
    );
}

export default Messages;