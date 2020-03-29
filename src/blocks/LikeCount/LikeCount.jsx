import React from 'react';
import s from './LikeCount.module.css';

const LikeCount = (props) => {
    return (
        <div className={s.likeCount}>
            <a href="#mockup" className={s.likeCount__like}>&#x2764;</a>
            <div className={s.likeCount__count}>{props.count}</div>
        </div>
    )
}

export default LikeCount;