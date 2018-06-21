import React from 'react';
import {common} from '../../less/common.less';
import {RecruitmentLess} from '../../less/recruitment/recruitment.less';

const Recruitment = ({
    recruitmentStyle
}) => (
    <div className={recruitmentStyle}>
        <div className="row recruitment_table">
			<div className="col-2">&nbsp;</div>
			<div className="col-8">
				<table>
					<thead>
						<tr>
							<th>职位</th>
							<th>人数</th>
							<th>学历</th>
							<th>专业</th>
							<th>薪资待遇</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>业务员</td>
							<td className="num">2</td>
							<td>不限</td>
							<td>不限</td>
							<td>底薪+提成</td>
						</tr>
						<tr>
							<td>会计实习生</td>
							<td className="num">2</td>
							<td className="emphasis">大专以上</td>
							<td className="emphasis">会计、税务</td>
							<td>底薪+提成</td>
						</tr>
						<tr>
							<td>文员</td>
							<td className="num">2</td>
							<td className="emphasis">大专以上</td>
							<td>不限</td>
							<td>底薪+提成</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className="col-2">&nbsp;</div>			
		</div>
		<div className="row">
			<div className="col-2">&nbsp;</div>		
			<div className="col-8">
				<p>在我们公司您可以享受到的福利：</p>
				<ul>
					<li>1、每周五天工作制，每天7.5小时，享有国家规定的法定假日。</li>
					<li>2、我们提供全面的社保。</li>
					<li>3、我们提供市场中等偏上的薪酬待遇(底薪+提成)，年终奖金。</li>
					<li>4、良好的职能培训；</li>
					<li>5、公司组织的国内、国外游；</li>
				</ul>
				<p className="interview-address">面试地点：云城区世纪大道恒晖苑第六幢1402室</p>
				<p className="interview-phone">联系电话：0766-8815799，8815909&nbsp;/&nbsp;18927184979</p>
				<div className="for_padding">&nbsp;</div>
			</div>
			<div className="col-2">&nbsp;</div>		
		</div>
    </div>
);

export default Recruitment;

