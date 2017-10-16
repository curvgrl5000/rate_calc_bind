import React from 'react';

export default function NumberInput(props){
	return(
		<div>
			<h3>{props.label}</h3>
			<input className="shadows" type="number" id={props.id} placeholder={props.value} min={props.min} max={props.max}
			onChange={event => props.onChange(event.target.value)} value={props.value}/>
		</div>
	)
}