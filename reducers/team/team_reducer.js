import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import HeaderConfig from '../../constants/header/config';
import TeamConfig from '../../constants/team/config';

const TeamReducer = handleActions(
    {
        CHANGE_MENU: (state, {payload}) => {
            if(HeaderConfig.menus[2].name == payload.selectedMenu){
                return state.set('teamStyle','container team');
            }
            return state.set('teamStyle','container team_hide');
        }
    },
    Immutable.fromJS({
        teamStyle: 'container team_hide',
        members: TeamConfig.members
	})
);

export default TeamReducer;
