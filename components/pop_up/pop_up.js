import React from 'react';
import {PopUpLess} from '../../less/pop_up/pop_up.less';
import Content from '../../constants/tax_knowledge_libarary/content';

const PopUp = ({
    title,
    content,
	popUpStyle,
	onClose
}) => (
    <div className={popUpStyle}>
		<div className="pop-content">
			<span className="close" onClick={onClose}>&times;</span>
			<h1>{title}</h1>
			<div dangerouslySetInnerHTML={{__html:Content[content]}}></div>
		</div>
	</div>
);

export default PopUp;