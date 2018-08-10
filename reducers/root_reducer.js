import {combineReducers} from 'redux-immutable';
import headerReducer from '../reducers/header/header_reducer';
import homeReducer from '../reducers/home/home_reducer';
import aboutUsReducer from '../reducers/about_us/about_us_reducer';
import recruitmentReducer from '../reducers/recruitment/recruitment_reducer';
import contactReducer from '../reducers/contact/contact_reducer';
import taxKnowledgeLibararyReducer from '../reducers/tax_knowledge_libarary/tax_knowledge_libarary_reducer';
import popUpReducer from '../reducers/pop_up/pop_up_reducer';
import timerReducer from '../reducers/timer/timer_reducer';

const rootReducer = combineReducers({
    headerReducer,
    homeReducer,
    aboutUsReducer,
    recruitmentReducer,
    contactReducer,
    taxKnowledgeLibararyReducer,
    popUpReducer,
    timerReducer
});

export default rootReducer;