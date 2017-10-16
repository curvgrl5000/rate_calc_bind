import React from 'react';
//import ReactDOM from 'react-dom';

import NumberInput from './number-input';
import Output from './output';

export default class RateCalculator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			dayRate : 250,
			hours : 8
		}
	}

	updateRate(dayRate){
		this.setState({
      dayRate : dayRate
	  });
  }

  updateHours(hours){
		this.setState({
      hours : hours
	  });
  }

	render() {
		const totalCalc = this.state.dayRate / this.state.hours;
		console.log(totalCalc);

	
		return (
			<div role="main" className="main">
				<section className="content_block">
					<h1 className="header-title">EVERY SECOND COUNTS</h1>

					<form>
				  	<NumberInput 
				  	  id="dailyRate"
				  		label="Rate: " 
				  		value={this.state.dayRate}
				  		min={0}
				  		max={600}
				  		onChange={this.updateRate.bind(this)} />

				  	<NumberInput
				  		id="hourlyRate"
				  		label="Hours: " 
				  		value={this.state.hours}
				  		min={1}
				  		max={8} 
				  		onChange={this.handleChanges.bind(this)} />

						<Output id="total" label="Hourly rate: " value={totalCalc.toFixed(2)} />
					</form>
				</section>
			</div>
		);
	}

}