import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import HeaderConfig from '../../constants/header/config';
import HomeConfig from '../../constants/home/config';
import {POSTER_PRE} from '../../actions/home/action_type';
import {POSTER_NEXT} from '../../actions/home/action_type';

const homeReducer = handleActions(
    {
        CHANGE_MENU: (state, {payload}) => {
            if('首页' == payload.selectedMenu){
                return state.set('homeStyle','container home');
            }
            return state.set('homeStyle','container home_hide');
        },
        POSTER_PRE: (state, {}) => {
            if( state.get('currentIndex') > 0){
                return state.set('currentIndex', state.get('currentIndex')-1);
            }
            return state.set('currentIndex', state.get('posters').size - 1);
        },
        POSTER_NEXT: (state, {}) => {
            if( state.get('currentIndex') < state.get('posters').size - 1){
                return state.set('currentIndex',state.get('currentIndex')+1);
            }
            return state.set('currentIndex', 0);
        }
    },
    Immutable.fromJS({
        homeStyle: 'container home',
        posters: HomeConfig.posters,
        currentIndex: HomeConfig.currentIndex
	})
);

export default homeReducer;
