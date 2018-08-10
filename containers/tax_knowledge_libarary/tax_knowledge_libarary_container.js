import {connect} from 'react-redux';
import taxKnowledgeLibarary from '../../components/tax_knowledge_libarary/tax_knowledge_libarary';
import {POP_UP_ACTION} from '../../actions/pop_up/pop_up_action';

export default connect (
    (state) => ({
            menus : state.getIn(['taxKnowledgeLibararyReducer','menus']),
            taxKnowledgeLibararyStyle : state.getIn(['taxKnowledgeLibararyReducer','taxKnowledgeLibararyStyle'])
        }
    ),
    (dispatch) => ({
        onPop: (event) => {
            let title = event.target.attributes.title.value;
            let content = event.target.attributes.content.value;
            dispatch(POP_UP_ACTION({
                'title': title,
                'content': content
            }));
        }
    })
)(taxKnowledgeLibarary);