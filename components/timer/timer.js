import React from 'react';


class Timer extends React.Component {
	constructor(props){
		super(props);
		this.tick = props.onTick;
		this.startOrStop = props.startOrStop;
		this.interval = null;
	}

	componentDidMount(){
		if(!!this.interval){
			clearInterval(this.interval);
		}
		this.interval = setInterval(this.tick, 6000);
	}

	componentWillUnmount(){
		if(!!this.interval){
			clearInterval(this.interval);
		}
	}

	componentWillReceiveProps(newProps) {
		if(newProps.startOrStop==='start'){
			if(!!this.interval){
				clearInterval(this.interval);
			}
			this.interval = setInterval(newProps.onTick, 6000);
		}else{
			if(!!this.interval){
				clearInterval(this.interval);
			}
		}
  }

	render(){
		return (
			<div></div>
		)
	}
}

export default Timer;