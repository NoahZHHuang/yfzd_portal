import {connect} from 'react-redux';
import Header from '../../components/header/header';
import {CHANGE_MENU_ACTION} from '../../actions/header/change_menu_action';

export default connect (
    (state) => ({
           menus : state.getIn(['headerReducer','menus'])
        }
    ),
    (dispatch) => ({
        onMenuClick: (event) => {
            let selectedMenu = event.target.text;
            dispatch(CHANGE_MENU_ACTION({'selectedMenu':selectedMenu}));
        }
    })
)(Header);