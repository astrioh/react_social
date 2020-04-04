import ProfileInfo from './ProfileInfo';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
    profileData: state.profilePageData.profileData[0],
});

const ProfileInfoContainer = connect(mapStateToProps)(ProfileInfo);

export default ProfileInfoContainer;