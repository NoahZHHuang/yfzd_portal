import {connect} from 'react-redux';
import AboutUs from '../../components/about_us/about_us';

export default connect (
    (state) => ({
            aboutUsStyle : state.getIn(['aboutUsReducer','aboutUsStyle'])
        }
    ),
    (dispatch) => ({
       
    })
)(AboutUs);