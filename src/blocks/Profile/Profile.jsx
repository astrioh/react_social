import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo 
                profileData={props.profilePageData.profileData}
                id={props.id}
            />
            <MyPosts postData={props.profilePageData.postData} dispatch={props.dispatch} newPostText={props.profilePageData.newPostText} />
        </div>
    )
}

export default Profile;