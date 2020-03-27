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
                <Post text='Hi! How are you?' />
                <Post text='Anyone wanna hang out?' />
                <Post text='Registered just now. Where do I click?' />
            </div>
        </div>
    );
}

export default MyPosts;