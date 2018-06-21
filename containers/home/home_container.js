import {connect} from 'react-redux';
import Home from '../../components/home/home';
import {POSTER_PRE_ACTION} from '../../actions/home/poster_pre_action';
import {POSTER_NEXT_ACTION} from '../../actions/home/poster_next_action';

export default connect (
    (state) => ({
            homeStyle : state.getIn(['homeReducer','homeStyle']),
            posters: state.getIn(['homeReducer','posters']),
            currentIndex: state.getIn(['homeReducer','currentIndex'])
        }
    ),
    (dispatch) => ({
        onClickPosterPre: () => {
            dispatch(POSTER_PRE_ACTION({}));
        },
        onClickPosterNext: () => {
            dispatch(POSTER_NEXT_ACTION({}));
        }
    })
)(Home);