import Line from './Line'
import parsePropTypes from 'parse-prop-types'
import React from 'react'
import Table from './Table'

const Box = props => {
	const propsTable = props.component ? parsePropTypes(props.component) : null

	return (
		<div className="flex flex-column flex-gap-3 py-2" id={ props.title }>
			{props.title && <h1>{props.title}</h1>}
			<Line>{props.children}</Line>
			<Table props={ propsTable } />
		</div>
	)
}

export default Box
