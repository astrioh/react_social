import { connect } from 'react-redux';
import Messages from './Messages';
import { sendMessageActionCreator, messageTextChangedActionCreator } from '../../redux/messageReducer';

const mapStateToProps = (state) => ({
    nameData: state.messagePageData.nameData,
    messageData: state.messagePageData.messageData,
    newMessageText: state.messagePageData.newMessageText,
});

const mapDispatchToProps = (dispatch) => ({
    sendMessageHandler: () => {
        dispatch(sendMessageActionCreator());
    },
    messageTextChangeHandler: (text) => {
        dispatch(messageTextChangedActionCreator(text));
    },
});

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer;