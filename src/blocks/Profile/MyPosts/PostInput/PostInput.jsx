import React from 'react';
import Button from '../../../Button/Button'
import s from './PostInput.module.css';


const PostInput = props => {

    const updatePostText = e => {
        let text = e.target.value;
        props.postTextChangeHandler(text);
    }

    return (
        <div className={s.postInput}>
            <textarea onChange={updatePostText} value={props.newPostText} placeholder='Your news...' className={s.postInput__input}></textarea>
            <Button clickFunction={props.addPostHandler} text='Add post' />
        </div>
    );
}

export default PostInput;