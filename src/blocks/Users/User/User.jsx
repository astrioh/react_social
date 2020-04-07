import React from 'react';
import s from './User.module.css';
import Button from '../../Button/Button';

const User = (props) => {
    let {id, fullName, location, status, isFollowed, userImg} = props.userData;
    let followText = isFollowed ? 'Unfollow' : 'Follow';
    return (
        <div className={s.user}>
            <div className={s.user__profile}>
                <img className={s.user__profileImg} src={userImg} alt="Profile"/>
                <Button size='medium' text={followText} clickFunction={props.follow.bind(null, id)} />
            </div>
            <div className={s.user__info}>
                <div className={s.user__personal}>
                    <div className={s.user__name}>{`${fullName.firstName} ${fullName.lastName}`}</div>
                    <div className={s.user__status}>{status}</div>
                </div>
                <div className={s.user__location}>
                    <div className={s.user__city}>{location.city + ','}</div>
                    <div className={s.user__country}>{location.country}</div>
                </div>
            </div>
        </div>
    )
};

export default User;