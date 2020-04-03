import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = props => {
    let { name, dateOfBirth, city, education, contacts, avatarLink, bgImage } = props.profileData[props.id];
    return (
        <div className={s.profileInfo}>
            <img
                className={s.profileInfo__bgImage}
                src={bgImage}
                alt="main bg"
            />
            <img className={s.profileInfo__avatar} src={avatarLink} alt="Profile pic"/>
            <div className={s.profileInfo__info}>
                <div className={s.profileInfo__name}>{name}</div>
                <div>Date of Birth: {dateOfBirth}</div>
                <div>City: {city}</div>
                <div>Education: {education}</div>
                <div>Contacts: {contacts}</div>
            </div>
        </div>
    );
}

export default ProfileInfo;