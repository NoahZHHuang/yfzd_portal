import {connect} from 'react-redux';
import Team from '../../components/team/team';

export default connect (
    (state) => ({
            teamStyle : state.getIn(['teamReducer','teamStyle']),
            members : state.getIn(['teamReducer','members'])
        }
    ),
    (dispatch) => ({
       
    })
)(Team);