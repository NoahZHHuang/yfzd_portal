import React from 'react';
import {common} from '../../less/common.less';
import {ContactLess} from '../../less/contact/contact.less';
import MAP_ADDRESS from '../../assets/map_address_2.jpg';

const Contact = ({
    contactStyle,
    name,
    mail_or_phone,
	content,
	resultPopWindowStyle,
	resultPopWindowContent,
	resultPopWindowIcon,
	onContentChange,
	onMailOrPhoneChange,
	onNameChange,
	onSubmit,
	onSubmitConfirm,
    onReset
}) => (
    <div className={contactStyle}>
		<div className="row">
			<div className="col-2">&nbsp;</div>
			<div className="col-8">
				<div>
					<p>办公地址：云城区世纪大道恒晖苑第六幢1402室</p>
					<p>咨询热线：0766-8815799，8815909&nbsp;/&nbsp;18927184979</p>
					<p>电子邮箱：yunfu_zhaoda@163.com</p>
				</div>
				<img id="mapImg" src={MAP_ADDRESS}/>
			</div>                    
			<div className="col-2">&nbsp;</div>   
		</div>
		<div className="for_padding">&nbsp;</div>
	</div>
);

export default Contact;

