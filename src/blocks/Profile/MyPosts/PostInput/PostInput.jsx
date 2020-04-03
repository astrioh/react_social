import React from 'react';
import Button from '../../../Button/Button'
import s from './PostInput.module.css';
import { postTextChangedActionCreator, addPostActionCreator } from '../../../../redux/profileReducer';


const PostInput = props => {

    const postTextChangeHandler = e => {
        let text = e.target.value
        props.dispatch(postTextChangedActionCreator(text));
    };

    return (
        <div className={s.postInput}>
            <textarea onChange={postTextChangeHandler} value={props.newPostText} placeholder='Your news...' className={s.postInput__input}></textarea>
            <Button clickFunction={props.dispatch.bind(null, addPostActionCreator())} text='Add post' />
        </div>
    );
}

export default PostInput;