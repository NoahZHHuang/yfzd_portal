import {connect} from 'react-redux';
import Contact from '../../components/contact/contact';
import {MESSAGE_SUBMIT_ACTION} from '../../actions/contact/message_submit_action';
import {MESSAGE_RESET_ACTION} from '../../actions/contact/message_reset_action';
import {MESSAGE_SUBMIT_RESULT_CONFIRM_ACTION} from '../../actions/contact/message_submit_result_confirm_action';
import {NAME_CHANGE_ACTION} from '../../actions/contact/name_change_action';
import {CONTENT_CHANGE_ACTION} from '../../actions/contact/content_change_action';
import {MAIL_OR_PHONE_CHANGE_ACTION} from '../../actions/contact/mail_or_phone_change_action';

export default connect (
    (state) => ({
            contactStyle : state.getIn(['contactReducer','contactStyle']),
            name: state.getIn(['contactReducer','name']),
            mail_or_phone: state.getIn(['contactReducer','mail_or_phone']),
            content: state.getIn(['contactReducer','content']),
            resultPopWindowStyle: state.getIn(['contactReducer','resultPopWindowStyle']),
            resultPopWindowContent: state.getIn(['contactReducer','resultPopWindowContent']),
            resultPopWindowIcon: state.getIn(['contactReducer','resultPopWindowIcon'])
        }
    ),
    (dispatch) => ({
        onNameChange:(event) => {
            dispatch(NAME_CHANGE_ACTION({'name': event.target.value}));
        },
        onMailOrPhoneChange:(event) => {
            dispatch(MAIL_OR_PHONE_CHANGE_ACTION({'mail_or_phone': event.target.value}));
        },
        onContentChange:(event) => {
            dispatch(CONTENT_CHANGE_ACTION({'content': event.target.value}));
        },
        onSubmit: () => {
            dispatch(MESSAGE_SUBMIT_ACTION({}));
        },
        onSubmitConfirm: () => {
            dispatch(MESSAGE_SUBMIT_RESULT_CONFIRM_ACTION({}));
        },
        onReset: () => {
            dispatch(MESSAGE_RESET_ACTION({}));
        }
    })
)(Contact);