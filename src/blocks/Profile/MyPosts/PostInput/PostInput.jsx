import React from 'react';
import Button from '../../../Button/Button'
import s from './PostInput.module.css';

const PostInput = () => {
    return (
        <div className={s.postInput}>
            <textarea placeholder='Your news...' className={s.postInput__input} name="newPost" cols="100" rows="2"></textarea>
            <Button text='Send' />
        </div>
    );
}

export default PostInput;