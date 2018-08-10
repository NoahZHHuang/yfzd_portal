import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

const TimerReducer = handleActions(
    {
        STOP_TIMER: (state, {}) => {
            return state.set('startOrStop','stop');
        },
        START_TIMER: (state, {}) => {
            return state.set('startOrStop','start');
        }
    },
    Immutable.fromJS({
        startOrStop: 'start'
	})
);

export default TimerReducer;