import React from 'react';
import s from './Messages.module.css';
import DialogName from './DialogName/DialogName';
import Message from './Message/Message';

const Messages = (props) => {

    let nameElements = props.nameData.map(e => <DialogName key={e.id.toString()} id={e.id} name={e.name} />);
    let messageElements = props.messageData.map(e => <Message key={e.id.toString()} text={e.text} />);
    return (
        <div className={s.messages}>
            <div className={s.messages__names}>
                {nameElements}
            </div>
            <div className={s.messages__text}>
                {messageElements}
            </div>
        </div>
    );
}

export default Messages;