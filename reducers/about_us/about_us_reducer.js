import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import HeaderConfig from '../../constants/header/config';
import AboutUsConfig from '../../constants/about_us/config';

const aboutUsReducer = handleActions(
    {
        CHANGE_MENU: (state, {payload}) => {
            if(HeaderConfig.menus[1].name == payload.selectedMenu){
                return state.set('aboutUsStyle','container about_us');
            }
            return state.set('aboutUsStyle','container about_us_hide');
        }
    },
    Immutable.fromJS({
        aboutUsStyle: 'container about_us_hide',
        members: AboutUsConfig.members
	})
);

export default aboutUsReducer;
