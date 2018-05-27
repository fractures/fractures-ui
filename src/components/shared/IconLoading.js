import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	color: PropTypes.string
}

const defaultProps = {
	color: null
}

const SVGElement = ({ className, color }) => (
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

const IconLoading = styled(SVGElement)`
	position: absolute;
	left: 0.5rem;
	top: 0.5rem;
	z-index: 1;

	height: 1.5rem;
	width: 1.5rem;

	animation: fr-button-show 180ms ease-in-out;
`

IconLoading.propTypes = propTypes
IconLoading.defaultProps = defaultProps

export default IconLoading
