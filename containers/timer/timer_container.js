import {connect} from 'react-redux';
import Timer from '../../components/timer/timer';
import {POSTER_NEXT_ACTION} from '../../actions/home/poster_next_action';

export default connect (
    (state) => ({
        startOrStop : state.getIn(['timerReducer','startOrStop']),
        }
    ),
    (dispatch) => ({
        onTick: () => {
            dispatch(POSTER_NEXT_ACTION({}));
        }
    })
)(Timer);