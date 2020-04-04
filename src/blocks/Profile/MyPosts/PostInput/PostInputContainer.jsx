import React from 'react';
import { postTextChangedActionCreator, addPostActionCreator } from '../../../../redux/profileReducer';
import PostInput from './PostInput';


const PostInputContainer = props => {

    const postTextChangeHandler = text => {
        props.dispatch(postTextChangedActionCreator(text));
    };

    return (
        <PostInput newPostText={props.newPostText} postTextChangeHandler={postTextChangeHandler} addPostHandler={props.dispatch.bind(null, addPostActionCreator())} />
    );
}

export default PostInputContainer;