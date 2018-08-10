import {handleActions} from 'redux-actions';
import Immutable from 'immutable';

const PopUpReducer = handleActions(
    {
        POP_UP: (state, {payload}) => {
            return state.set('popUpStyle','pop_up')
                        .set('title',payload.title)
                        .set('content',payload.content);
        },
        POP_UP_CLOSE: (state, {payload}) => {
            return state.set('popUpStyle','pop_up_hide') 
                        .set('title','')
                        .set('content','');
        }
    },
    Immutable.fromJS({
        title: '',
        content: '',
        popUpStyle: 'pop_up_hide'
	})
);

export default PopUpReducer;
