import PropTypes from "prop-types"
import React from "react"

const propTypes = {
	color: PropTypes.string
}

const defaultProps = {
	color: null
}

const IconLoading = props => (
	<svg xmlns="http://www.w3.org/2000/svg" className="fr-btn__loading">
		<circle fill="none" strokeWidth={ 4 } stroke="var(--fr-300)" cx="12" cy="12" r="10" style={ { opacity: 0.25 } } />
		<circle
			fill="none"
			strokeWidth={ 4 }
			stroke={ props.color || "var(--fr-100)" }
			strokeDasharray="32"
			strokeLinecap="round"
			cx="12"
			cy="12"
			r="10"
		/>
	</svg>
)

IconLoading.propTypes = propTypes
IconLoading.defaultProps = defaultProps

export default IconLoading
