import PropTypes from 'prop-types'
import React from 'react'

const propTypes = {
	className: PropTypes.string,
	value: PropTypes.string.isRequired
}

const defaultProps = {
	value: ''
}

const NakedButton = ({ className, value }) => <input className={ className } type="button" role="button" value={ value } />

NakedButton.propTypes = propTypes
NakedButton.defaultProps = defaultProps

export default NakedButton
