import React from 'react';
import s from './Post.module.css';



const Post = (props) => {
    return (
        <div className={s.post}>{props.text}</div>
    );
}

export default Post;