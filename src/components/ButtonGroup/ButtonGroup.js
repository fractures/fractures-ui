import PropTypes from 'prop-types'
import styled from 'styled-components'

const propTypes = {
	children: PropTypes.node.isRequired
}

const ButtonGroup = styled.div`
	display: flex;

	& > * > * {
		border-radius: 0;
	}

	& > *:not(:first-child) *:not(.radius-max) {
		margin: 0 0 0 -1px;
	}

	& > *:first-child *:not(.radius-max) {
		border-top-left-radius: 0.25rem;
		border-bottom-left-radius: 0.25rem;
	}

	& > *:last-child *:not(.radius-max) {
		border-top-right-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
	}

	& > *:first-child .radius-max {
		border-top-left-radius: 10rem;
		border-bottom-left-radius: 10rem;
	}

	& > *:last-child .radius-max {
		border-top-right-radius: 10rem;
		border-bottom-right-radius: 10rem;
	}
`

ButtonGroup.propTypes = propTypes

export default ButtonGroup
