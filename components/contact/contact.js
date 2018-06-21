import React from 'react';
import {common} from '../../less/common.less';
import {ContactLess} from '../../less/contact/contact.less';

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
			<div className="col-7">
				<img id="mapImg" src="./assets/map_address.jpg"/>
			</div>                    
			<div className="col-5 detail">
				<div>
					<p>办公地址：云城区世纪大道恒晖苑第六幢1402室</p>
					<p>咨询热线：0766-8815799，8815909&nbsp;/&nbsp;18927184979</p>
					<p>电子邮箱：yunfu_zhaoda@163.com</p>
					<p>您也可以直接留言，工作人员收到后会尽快回复。</p>
					<table>
						<tbody>
							<tr>
								<td className="item">姓名<span className="must_tips">*</span></td>
								<td><input type="text" placeholder="请输入您的称呼" value={name} onChange={onNameChange}/></td>
							</tr>
							<tr>
								<td className="item">电话/邮箱<span className="must_tips">*</span><br/></td>
								<td><input type="text" placeholder="请输入您有效联系方式，邮箱电话皆可" value={mail_or_phone} onChange={onMailOrPhoneChange}/></td>
							</tr>
							<tr>
								<td className="item">咨询内容<span className="must_tips">*</span></td>
								<td><textarea placeholder="请详细输入您的问题，我们尽快答复" value={content} onChange={onContentChange}></textarea></td>
							</tr>
							<tr>
								<td colSpan="2" className="btn_grp">
									<button id="submit" onClick={onSubmit}>提交</button>&nbsp;&nbsp;&nbsp;&nbsp;
									<button id="reset" onClick={onReset}>重置</button>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>   
			<div id="result_pop" className={resultPopWindowStyle}>
				<div className="result-pop-content">
					<span className="close" onClick={onSubmitConfirm}>&times;</span>
					<img src={resultPopWindowIcon}/>
					<p>{resultPopWindowContent}</p>
				</div>
			</div>
			<div className="for_padding">&nbsp;</div>
		</div>
	</div>
);

export default Contact;

