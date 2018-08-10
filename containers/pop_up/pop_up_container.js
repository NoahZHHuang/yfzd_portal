import {connect} from 'react-redux';
import PopUp from '../../components/pop_up/pop_up';
import {POP_UP_CLOSE_ACTION} from '../../actions/pop_up/pop_up_close_action';

export default connect (
    (state) => ({
            title : state.getIn(['popUpReducer','title']),
            content : state.getIn(['popUpReducer','content']),
            popUpStyle : state.getIn(['popUpReducer','popUpStyle'])
        }
    ),
    (dispatch) => ({
        onClose: (event) => {
            dispatch(POP_UP_CLOSE_ACTION({}));
        }
    })
)(PopUp);
