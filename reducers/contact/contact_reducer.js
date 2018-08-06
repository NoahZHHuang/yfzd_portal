import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import HeaderConfig from '../../constants/header/config';

const ContactReducer = handleActions(
    {
        CHANGE_MENU: (state, {payload}) => {
            if('联系方式' == payload.selectedMenu){
                return state.set('contactStyle','container contact');
            }
            return state.set('contactStyle','container contact_hide');
        }
    },
    Immutable.fromJS({
        contactStyle: 'container contact_hide'
	})
);

export default ContactReducer;
