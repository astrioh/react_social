import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let postData = [
    {id: 1, text: 'Hi! How are you?', likes: 2},
    {id: 2, text: 'Anyone wanna hang out?', likes: 4},
    {id: 3, text: 'Registered just now. Where do I click?', likes: 1},
];

let nameData = [
    {id: 1, name: 'Andrey'},
    {id: 2, name: 'Lera'},
    {id: 3, name: 'Vitaly'},
    {id: 4, name: 'Pavel'},
];

let messageData = [
    {id: 1, text: 'Hi!'},
    {id: 2, text: 'Hello!'},
    {id: 3, text: 'How are you!'},
    {id: 4, text: 'Helloooo!'},
];

let profileData = [
    {
        name: "Ilya Butskikh",
        dateOfBirth: "19.02.2001",
        city: "Yaroslavl'",
        education: "YSTU",
        contacts: "+79159732069",
        avatarLink: "https://sun9-52.userapi.com/c852228/v852228024/8cdcb/X08CH8nHDN4.jpg",
        bgImage: "https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg",
    },
];

ReactDOM.render(<App postData={postData} nameData={nameData} messageData={messageData} profileData={profileData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
