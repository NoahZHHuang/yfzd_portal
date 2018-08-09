import {handleActions} from 'redux-actions';
import Immutable from 'immutable';
import taxKnowledgeLibararyConfig from '../../constants/tax_knowledge_libarary/config';

const TaxKnowledgeLibararyReducer = handleActions(
    {
        CHANGE_MENU: (state, {payload}) => {
            if('税务知识库' == payload.selectedMenu){
                return state.set('taxKnowledgeLibararyStyle','container tax_knowledge_libarary');
            }
            return state.set('taxKnowledgeLibararyStyle','container tax_knowledge_libarary_hide');
        }
    },
    Immutable.fromJS({
        menus: taxKnowledgeLibararyConfig.menus,
        taxKnowledgeLibararyStyle: 'container tax_knowledge_libarary_hide'
	})
);

export default TaxKnowledgeLibararyReducer;
