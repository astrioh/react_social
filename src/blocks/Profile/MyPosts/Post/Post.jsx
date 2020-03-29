import React from 'react';
import s from './Post.module.css';
import LikeCount from '../../../LikeCount/LikeCount';



const Post = (props) => {
    return (
        <div className={s.post}>
            <span className={s.post__text}>{props.text}</span>
            <LikeCount count={props.likes} />
        </div>
    );
}

export default Post;