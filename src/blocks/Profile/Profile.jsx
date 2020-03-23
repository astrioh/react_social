import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = (props) => {
    return (
        <div className={s.profile}>
            <img
                className={s.profile__bgImage}
                src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"
                alt="main bg"
            />
            <img className={s.profile__avatar} src="https://sun9-52.userapi.com/c852228/v852228024/8cdcb/X08CH8nHDN4.jpg" alt="Profile pic"/>
            <div className={s.profile__info}>
                <div className={s.profile__name}>{props.name}</div>
                <div>Date of Birth: {props.dateOfBirth}</div>
                <div>City: {props.city}</div>
                <div>Education: {props.education}</div>
                <div>Contacts: {props.contacts}</div>
            </div>
            <MyPosts />
        </div>
    )
}

export default Profile;