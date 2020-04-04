const ADD_POST = 'ADD_POST',
    POST_TEXT_CHANGED = 'POST_TEXT_CHANGED';

let initialState = {
        profileData: [
            {
                name: 'Ilya Butskikh',
                dateOfBirth: '19.02.2001',
                city: "Yaroslavl'",
                education: 'YSTU',
                contacts: '+79159732069',
                avatarLink:
                    'https://sun9-52.userapi.com/c852228/v852228024/8cdcb/X08CH8nHDN4.jpg',
                bgImage:
                    'https://openimagedenoise.github.io/images/moana_16spp_oidn.jpg'
            }
        ],
        postData: [
            { id: 1, text: 'Hi! How are you?', likes: 2 },
            { id: 2, text: 'Anyone wanna hang out?', likes: 4 },
            { id: 3, text: 'Registered just now. Where do I click?', likes: 1 }
        ],
        newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let stateCopy = {...state};
            let id = stateCopy.postData.length;

            let newPost = {
                id: ++id,
                text: stateCopy.newPostText,
                likes: 0
            };
            stateCopy.newPostText = '';
            stateCopy.postData.push(newPost);
            return stateCopy;
        }
        case POST_TEXT_CHANGED: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const postTextChangedActionCreator = text => ({type: POST_TEXT_CHANGED, newText: text});

export default profileReducer;