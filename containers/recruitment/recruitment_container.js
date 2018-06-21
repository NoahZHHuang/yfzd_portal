import {connect} from 'react-redux';
import Recruitment from '../../components/recruitment/recruitment';

export default connect (
    (state) => ({
            recruitmentStyle : state.getIn(['recruitmentReducer','recruitmentStyle'])
        }
    ),
    (dispatch) => ({
       
    })
)(Recruitment);