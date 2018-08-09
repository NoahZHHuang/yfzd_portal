import {connect} from 'react-redux';
import taxKnowledgeLibarary from '../../components/tax_knowledge_libarary/tax_knowledge_libarary';

export default connect (
    (state) => ({
            menus : state.getIn(['taxKnowledgeLibararyReducer','menus']),
            taxKnowledgeLibararyStyle : state.getIn(['taxKnowledgeLibararyReducer','taxKnowledgeLibararyStyle'])
        }
    ),
    (dispatch) => ({
       
    })
)(taxKnowledgeLibarary);