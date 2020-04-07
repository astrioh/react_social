import Users from "./Users";
import { connect } from 'react-redux';
import { followActionCreator, setUsersActionCreator } from "../../redux/usersReducer";

const mapStateToProps = (state) => ({
    usersData: state.usersPage.usersData,
});

const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followActionCreator(userId)),
    setUsers: (usersData) => dispatch(setUsersActionCreator(usersData)),
});

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;