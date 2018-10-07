import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"

const propTypes = {
	className: PropTypes.string,
	color: PropTypes.string,
	size: PropTypes.number
}

const defaultProps = {
	color: null,
	size: 20
}

const NakedLoading = ({ className, color, size }) => {
	const rSize = size / 2
	const cSize = rSize + 2
	const dashSize = size + cSize

	return (
		<svg className={ className } xmlns="http://www.w3.org/2000/svg">
			{/* prettier-ignore */}
			<circle
				fill="none"
				strokeWidth={ 4 }
				stroke="var(--fr-300)"
				cx={ cSize }
				cy={ cSize }
				r={ rSize }
				style={ { opacity: 0.25 } } />
			<circle
				fill="none"
				strokeWidth={ 4 }
				stroke={ color || "var(--fr-100)" }
				strokeDasharray={ dashSize }
				strokeLinecap="round"
				cx={ cSize }
				cy={ cSize }
				r={ rSize }
			/>
		</svg>
	)
}

const showIconLoading = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`

const rotateIconLoading32 = keyframes`
	from { stroke-dashoffset: 0; }
	to { stroke-dashoffset: 32; }
`

const rotateIconLoading64 = keyframes`
	from { stroke-dashoffset: 0; }
	to { stroke-dashoffset: 64; }
`

const Loading = styled(NakedLoading)`
	z-index: 1;

	height: ${ props => props.size + 4 }px;
	width: ${ props => props.size + 4 }px;

	animation: ${ showIconLoading } 100ms ease-in-out;

	circle {
		animation: ${ props => (props.size === 20 ? rotateIconLoading64 : rotateIconLoading32) } 480ms linear forwards infinite;
	}
`

NakedLoading.propTypes = propTypes
NakedLoading.defaultProps = defaultProps

Loading.propTypes = propTypes
Loading.defaultProps = defaultProps

export default Loading
