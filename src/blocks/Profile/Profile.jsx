import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.profile}>
            <img
                className={s.profile__bgImage}
                src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"
                alt="main bg"
            />
            <div>
                Profile
            </div>
            <div>
                My posts
                <div>New post</div>
            
                <div className={s.profile__posts}>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>
        </div>
    )
}

export default Profile;