import React from 'react';
import {common} from '../../less/common.less';
import {taxKnowledgeLibararyLess} from '../../less/tax_knowledge_libarary/tax_knowledge_libarary.less';

const TaxKnowledgeLibarary = ({
	menus,
	taxKnowledgeLibararyStyle,
	onPop
}) => (
    <div className={taxKnowledgeLibararyStyle}>
        <div className="row">
			<div className="col-2">&nbsp;</div>
			<div className="col-8">
            	<ul>
					{
						menus.map((menu)=>
                        	(
								<li className={"menu "+ menu.get("cssTag")}>{menu.get("menuName")}
									<ul>
									{
										menu.get("items").map((item)=>
                        					(
												<li className="item"><button title={item.get("title")} content={item.get("content")} onClick={onPop}>{item.get("itemName")}</button></li>
                    						)
                        				)
									}
									</ul>
								</li>
                    		)
                        )
                    }
				</ul>
				<div className="for_padding">&nbsp;</div>	
			</div>
			<div className="col-2">&nbsp;</div>		
		</div>
    </div>
);

export default TaxKnowledgeLibarary;

