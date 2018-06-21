import React from 'react';
import {common} from '../../less/common.less';
import {AboutUsLess} from '../../less/about_us/about_us.less';

const AboutUs = ({
    aboutUsStyle
}) => (
    <div className={aboutUsStyle}>
		<div className="row">
			<div className="col-2">&nbsp;</div>
			<div className="col-8">
				<h1>广东肇达税务师事务所有限公司云浮分公司</h1>
                <h1>云浮金瀚财税咨询服务有限公司</h1>
				<p>广东肇达税务师事务所有限公司是广东省外汇管理局、广东省国家税务局、广东省地方税务局、广东省高级人民法院及广州市仲裁委员会认证之审计、评估之服务机构。是AAA级税务师事务所，旗下有：广东肇达税务师事务所有限公司江门分公司、梅州分公司、湛江分公司、云浮分公司、清远分公公司、佛山分公司等。本公司为企业提供包括审计、会计、工程预决算审核、税务代理、税务筹划、资产评估、资产重组和剥离、收购、合并、分拆、企业融资等专业服务，在金融业、制造业、商业、房地产业、高科技业、饮食服务业等领域服务过的企业超10000家。</p>
				<p>云浮金瀚财税咨询服务有限公司是经政府部门批准从事财务会计、税务咨询服务的专业公司，服务主要包括财务会计、税务咨询、培训，企业帐务处理、税务策划、代办工商执照等。</p>
				<p className="business_scope">经营范围</p>
				<ul>
					<li>一、 代办银行存款资金证明。</li>
					<li>二、代办工商营业执照、税务登记、申请进出口经营权。</li>
					<li>三、代理记账、纳税申报、节税避税。</li>
					<li>四、所得税汇算清缴报告、公司注销税务报告、股权转让涉税报告、专项资金审计报告、银行贷款会计审计报告、招投标审计报告。</li>
					<li>五、土地评估报告、资产评估报告、净资产评估报告。</li>
					<li>六、代办政府专项资金申请、高新技术企业申请。</li>
				</ul>	
				<div className="for_padding">&nbsp;</div>
			</div>
			<div className="col-2">&nbsp;</div>	
		</div>		
	</div>
);

export default AboutUs;

