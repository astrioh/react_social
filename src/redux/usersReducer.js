const FOLLOW = 'FOLLOW',
    SET_USERS = 'SET_USERS';

let initialState = {
    usersData: [
    ],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                usersData: state.usersData.map((user) =>
                    user.id === action.userId
                        ? { ...user, isFollowed: !user.isFollowed }
                        : user
                ),
            };
        }
        case SET_USERS: {
            return { ...state, usersData: [...state.usersData, ...action.usersData] };
        }
        default:
            return state;
    }
};

export const followActionCreator = (userId) => ({
    type: FOLLOW,
    userId: userId,
});

export const setUsersActionCreator = (usersData) => ({
    type: SET_USERS,
    usersData: usersData,
});

export default usersReducer;
