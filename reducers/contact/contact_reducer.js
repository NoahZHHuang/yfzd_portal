import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import HeaderConfig from '../../constants/header/config';
import {MESSAGE_SUBMIT, MESSAGE_SUBMIT_RESULT_CONFIRM, MESSAGE_RESET, CONTENT_CHANGE, NAME_CHANGE, MAIL_OR_PHONE_CHANGE} from '../../actions/contact/action_type';

const ContactReducer = handleActions(
    {
        CHANGE_MENU: (state, {payload}) => {
            if('联系方式' == payload.selectedMenu){
                return state.set('contactStyle','container contact');
            }
            return state.set('contactStyle','container contact_hide');
        },
        MESSAGE_SUBMIT: (state, {}) => {
            let name = state.get('name');
            let mailOrPhone = state.get('mail_or_phone');
            let content = state.get('content');
            if(name==='' || mailOrPhone==='' || content===''){
                return state.set('resultPopWindowStyle','result_pop')
                            .set('resultPopWindowContent','请检查确认您已完整输入姓名，联系方式与咨询内容。')
                            .set('resultPopWindowIcon','./assets/icon_no.jpg');
            }
            return state.set('name','').set('mail_or_phone','').set('content','')
                        .set('resultPopWindowStyle','result_pop')
                        .set('resultPopWindowContent','您的留言已经发送成功，工作人员会尽快处理完并回复您，谢谢您对肇达的信任与支持。')
                        .set('resultPopWindowIcon','./assets/icon_yes.jpg');
        },
        MESSAGE_RESET: (state, {}) => {
            return state.set('name','').set('mail_or_phone','').set('content','');
            
        },
        MESSAGE_SUBMIT_RESULT_CONFIRM: (state, {}) => {
            let resultStatusIsGood = state.get('resultPopWindowIcon') === './assets/icon_yes.jpg';
            let newState = state.set('resultPopWindowStyle','result_pop_hide')
                                .set('resultPopWindowContent','')
                                .set('resultPopWindowIcon','');
            if(resultStatusIsGood){
                return newState.set('name','').set('mail_or_phone','').set('content','');
            }
            return newState;
        },
        NAME_CHANGE: (state, {payload}) => {
            return state.set('name',payload.name);
        },
        CONTENT_CHANGE: (state, {payload}) => {
            return state.set('content', payload.content);
        },
        MAIL_OR_PHONE_CHANGE: (state, {payload}) => {
            return state.set('mail_or_phone', payload.mail_or_phone);
        },
    },
    Immutable.fromJS({
        contactStyle: 'container contact_hide',
        name: '',
        mail_or_phone: '',
        content : '',
        resultPopWindowStyle: 'result_pop_hide',
        resultPopWindowContent: '',
        resultPopWindowIcon:''
	})
);

export default ContactReducer;
