import PropTypes from "prop-types"
import React from "react"
import styled, { keyframes } from "styled-components"

const propTypes = {
	color: PropTypes.string
}

const defaultProps = {
	color: null
}

const NakedLoading = ({ className, color }) => (
	<svg className={ className } xmlns="http://www.w3.org/2000/svg">
		<circle fill="none" strokeWidth={ 4 } stroke="var(--fr-300)" cx="12" cy="12" r="10" style={ { opacity: 0.25 } } />
		<circle
			fill="none"
			strokeWidth={ 4 }
			stroke={ color || "var(--fr-100)" }
			strokeDasharray="32"
			strokeLinecap="round"
			cx="12"
			cy="12"
			r="10"
		/>
	</svg>
)

const showIconLoading = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`

const rotateIconLoading = keyframes`
	from { stroke-dashoffset: 0; }
	to { stroke-dashoffset: 64; }
`

const Loading = styled(NakedLoading)`
	position: absolute;
	left: 0.5rem;
	top: 0.5rem;
	z-index: 1;

	height: 1.5rem;
	width: 1.5rem;

	animation: ${ showIconLoading } 180ms ease-in-out;
	
	circle {
		animation: ${ rotateIconLoading } 480ms linear forwards infinite;
	}
`

Loading.propTypes = propTypes
Loading.defaultProps = defaultProps

export default Loading
