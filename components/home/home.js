import React from 'react';
import {common} from '../../less/common.less';
import {HomeLess} from '../../less/home/home.less';
import CLIENT_1 from '../../assets/client_1.jpg';
import CLIENT_2 from '../../assets/client_2.jpg';
import CLIENT_3 from '../../assets/client_3.jpg';
import CLIENT_4 from '../../assets/client_4.jpg';
import CLIENT_5 from '../../assets/client_5.jpg';
import CLIENT_6 from '../../assets/client_6.jpg';
import CLIENT_7 from '../../assets/client_7.jpg';
import CLIENT_8 from '../../assets/client_8.jpg';
import CLIENT_9 from '../../assets/client_9.jpg';
import CLIENT_10 from '../../assets/client_10.jpg';


const Home = ({
	homeStyle,
	posters,
	currentIndex,
	onClickPosterPre,
	onClickPosterNext,
	stopTimer,
	startTimer
}) => (
    <div className={homeStyle}  onMouseEnter={stopTimer} onMouseLeave={startTimer}>		
		{
			posters.map((poster, index)=>
				{
					let styleAdvertising, styleArticle ;
					if (currentIndex == index) {
						styleAdvertising = 'row advertising';
						styleArticle = 'row article';
					} else {
						styleAdvertising = 'row advertising_hide';
						styleArticle = 'row article_hide';
					}
					return(
						<div>
							<div className={styleAdvertising}>
								<div className="col-2">&nbsp;</div>
								<div className="col-8 poster">
									<div className="posterPreDiv">
										<a className="posterPreBtn" onClick={onClickPosterPre}>&#10094;</a>
									</div>
									<div className="posterMiddleDiv">
										<img src={poster.get("posterPath")}/>
									</div>
									<div className="posterNextDiv">
										<a className="posterNextBtn" onClick={onClickPosterNext}>&#10095;</a>
									</div>
									<div className="slideDotDiv">
										{
											Object.keys(Array.apply(0, {length:posters.size})).map(
												(index)=>{
													if(index==currentIndex){
														return (<span className="dot dot_active"></span>)
													}else{
														return (<span className="dot"></span>)
													}
												}
											)										
										}
									</div>
								</div>     
								<div className="col-2">&nbsp;</div>               
							</div>
							<div className={styleArticle}>
								<div className="col-2">&nbsp;</div>
								<div className="col-8" dangerouslySetInnerHTML={{__html:poster.get("content")}}></div>
								<div className="col-2">&nbsp;</div>
							</div>
						</div>
					)
				}
			)
		}
		<div className="row client_banner">
			<div className="col-12">
				<p>
					<img src="./assets/banner.jpg"/>
				</p>
			</div>                                       
		</div>
		<div className="row clients">
			<div className="col-1">&nbsp;</div>
			<div className="col-2">
				<img src={CLIENT_1}/>
			</div>                    
			<div className="col-2">
				<img src={CLIENT_2}/>
			</div>                    
			<div className="col-2">
				<img src={CLIENT_3}/>
			</div>                    
			<div className="col-2">
				<img src={CLIENT_4}/>
			</div>                    
			<div className="col-2">
				<img src={CLIENT_5}/>
			</div>                                      
			<div className="col-1">&nbsp;</div>                                       
		</div>
		<div className="row clients">
			<div className="col-1">&nbsp;</div>
			<div className="col-2">
				<img src={CLIENT_6}/>
			</div>                    
			<div className="col-2">
				<img src={CLIENT_7}/>
			</div>                    
			<div className="col-2">
				<img src={CLIENT_8}/>
			</div>                    
			<div className="col-2">
				<img src={CLIENT_9}/>
			</div>                    
			<div className="col-2">
				<img src={CLIENT_10}/>
			</div>                                      
			<div className="col-1">&nbsp;</div>                                       
		</div>
		<div className="for_padding">&nbsp;</div>
	</div>	
);

export default Home;

