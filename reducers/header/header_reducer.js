import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import HeaderConfig from '../../constants/header/config';
import {CHANGE_MENU} from '../../actions/header/action_type';

const headerReducer = handleActions(
    {
        CHANGE_MENU: (state, {payload}) => {
            let newMenus = state.get('menus').map((menu) => {  
                if (menu.get('name') == payload.selectedMenu) {
                    return menu.set('style','activated');
                }else{
                    return menu.set('style','');
                }
            });  
            return state.set('menus',newMenus);
        }
    },
    Immutable.fromJS({
        menus : HeaderConfig.menus
	})
);

export default headerReducer;
