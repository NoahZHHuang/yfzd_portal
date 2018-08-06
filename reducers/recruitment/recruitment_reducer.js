import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import HeaderConfig from '../../constants/header/config';

const RecruitmentReducer = handleActions(
    {
        CHANGE_MENU: (state, {payload}) => {
            if('诚聘英才' == payload.selectedMenu){
                return state.set('recruitmentStyle','container recruitment');
            }
            return state.set('recruitmentStyle','container recruitment_hide');
        }
    },
    Immutable.fromJS({
        recruitmentStyle: 'container recruitment_hide'
	})
);

export default RecruitmentReducer;
