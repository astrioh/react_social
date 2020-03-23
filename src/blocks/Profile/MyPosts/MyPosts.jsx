import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import PostInput from './PostInput/PostInput';


const MyPosts = () => {
    return (
        <div className={s.myPosts} >
            <div className={s.myPosts__title}>My posts</div>
            <div>
                <PostInput />
            </div>
        
            <div className={s.profile__posts}>
                <Post text='1' />
                <Post text='2' />
                <Post text='3' />
            </div>
        </div>
    );
}

export default MyPosts;