import React from 'react';
import {common} from '../../less/common.less';
import {HeaderLess} from '../../less/header/header.less';

const Header = ({
	menus,
	onMenuClick
}) => (
    <div className="container header">
		<div className="row">
			<div className="col-5 logo">
				<img src='./assets/logo.jpg' />
			</div>                    
			<div className="col-7 main-menu">
				<ul className="nav">
					{
                        menus.map((menu, index)=>
                        	(
                            	<li><a className={menu.get('style')}  onClick={onMenuClick}>{menu.get('name')}</a></li>
                    		)
                        )
                    }
				</ul>
			</div>                                    
		</div>
	</div>
);

export default Header;

