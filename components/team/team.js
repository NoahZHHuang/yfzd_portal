import React from 'react';
import {common} from '../../less/common.less';
import {TeamLess} from '../../less/team/team.less';

const Team = ({
    teamStyle,
	members
}) => (
    (
        <div className={teamStyle}>
        {
            members.map((member)=>
                (
                    <div className="row">
                        <div className="col-2">&nbsp;</div>
                        <div className="col-2">
                            <img src={member.get('photo')}/>
                        </div>
                        <div className="col-6">
                            <p className="name">{member.get('name')}</p>
                            <p className="position">{member.get('position')}</p>
                            <p className="introduction">{member.get('introduction')}</p>
                        </div>
                        <div className="col-2">&nbsp;</div>			
                    </div>
                )
            )
        }
        <div className="for_padding">&nbsp;</div>
        </div>
    )
);

export default Team;

