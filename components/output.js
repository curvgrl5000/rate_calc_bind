import React from 'react';

export default function Output(props){
	return <h3 id={props.id}>{props.label} <span>${props.value}</span></h3>
}

Output.defaultProps = {
    value: 0
};