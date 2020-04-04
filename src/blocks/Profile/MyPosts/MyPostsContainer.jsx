import MyPosts from './MyPosts';
import { addPostActionCreator, postTextChangedActionCreator } from '../../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    postData: state.profilePageData.postData,
    newPostText: state.profilePageData.newPostText,
});

const mapDispatchToProps = (dispatch) => ({
    addPostHandler: () => {
        dispatch(addPostActionCreator());
    },
    postTextChangeHandler: (text) => {
        dispatch(postTextChangedActionCreator(text));
    }
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;