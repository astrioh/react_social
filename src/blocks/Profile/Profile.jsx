import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo 
                profileData={props.profileData}
                id={props.id}
            />
            <MyPosts postData={props.postData} />
        </div>
    )
}

export default Profile;