import React from 'react';
import s from './Messages.module.css';
import DialogName from './DialogName/DialogName';

const Messages = () => {
    return (
        <div className={s.messages}>
            <div className={s.messages__names}>
                <DialogName id='1' name='Andrey' />
                <DialogName id='2' name='Lera' />
                <DialogName id='3' name='Vitaly' />
                <DialogName id='4' name='Pavel' />
            </div>
            <div className={s.messages__text}>
                <div className={s.messages__message}>Hi!</div>
                <div className={s.messages__message}>Hello!</div>
                <div className={s.messages__message}>How are you?</div>
                <div className={s.messages__message}>Heloooo!</div>
            </div>
        </div>
    );
}

export default Messages;