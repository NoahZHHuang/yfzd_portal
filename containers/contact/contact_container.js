import {connect} from 'react-redux';
import Contact from '../../components/contact/contact';

export default connect (
    (state) => ({
            contactStyle : state.getIn(['contactReducer','contactStyle']),
            name: state.getIn(['contactReducer','name']),
            mail_or_phone: state.getIn(['contactReducer','mail_or_phone']),
            content: state.getIn(['contactReducer','content']),
            resultPopWindowStyle: state.getIn(['contactReducer','resultPopWindowStyle']),
            resultPopWindowContent: state.getIn(['contactReducer','resultPopWindowContent']),
            resultPopWindowIcon: state.getIn(['contactReducer','resultPopWindowIcon'])
        }
    ),
    (dispatch) => ({
      
    })
)(Contact);