import React from 'react';
import {common} from '../../less/common.less';
import {HomeLess} from '../../less/home/home.less';

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
				<img src="./assets/client_1.jpg"/>
			</div>                    
			<div className="col-2">
				<img src="./assets/client_2.jpg"/>
			</div>                    
			<div className="col-2">
				<img src="./assets/client_3.jpg"/>
			</div>                    
			<div className="col-2">
				<img src="./assets/client_4.jpg"/>
			</div>                    
			<div className="col-2">
				<img src="./assets/client_5.jpg"/>
			</div>                                      
			<div className="col-1">&nbsp;</div>                                       
		</div>
		<div className="row clients">
			<div className="col-1">&nbsp;</div>
			<div className="col-2">
				<img src="./assets/client_6.jpg"/>
			</div>                    
			<div className="col-2">
				<img src="./assets/client_7.jpg"/>
			</div>                    
			<div className="col-2">
				<img src="./assets/client_8.jpg"/>
			</div>                    
			<div className="col-2">
				<img src="./assets/client_9.jpg"/>
			</div>                    
			<div className="col-2">
				<img src="./assets/client_10.jpg"/>
			</div>                                      
			<div className="col-1">&nbsp;</div>                                       
		</div>
		<div className="for_padding">&nbsp;</div>
	</div>	
);

export default Home;

