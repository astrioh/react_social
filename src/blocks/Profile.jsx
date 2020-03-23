import React from 'react';

const Profile = () => {
    return (
        <div className="profile">
            <img
                className="profile__bg-image"
                src="https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg"
                alt="main bg"
            />
            <div>Profile</div>
            <div>
                My posts
                <div>New post</div>
            </div>
            <div>post 1</div>
            <div>post 2</div>
        </div>
    )
}

export default Profile;