import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import PostInput from './PostInput/PostInput';

const MyPosts = (props) => {
    /* let postData = [
        {id: 1, text: 'Hi! How are you?', likes: 2},
        {id: 2, text: 'Anyone wanna hang out?', likes: 4},
        {id: 3, text: 'Registered just now. Where do I click?', likes: 1},
    ]; */

    let postElements = props.postData.map(e => <Post key={e.id.toString()} text={e.text} likes={e.likes} />);

    return (
        <div className={s.myPosts} >
            <div className={s.myPosts__title}>My posts</div>
            <div>
                <PostInput addPostHandler={props.addPostHandler} postTextChangeHandler={props.postTextChangeHandler} newPostText={props.newPostText} />
            </div>
        
            <div className={s.profile__posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;