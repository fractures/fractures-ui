import Loading from "../../Loading/Loading"
import PropTypes from "prop-types"
import styled from "styled-components"

const propTypes = { isSmall: PropTypes.string }
const defaultProps = { isSmall: "0.5rem" }

const LoadingIcon = styled(Loading)`
	position: absolute;
	left: ${ props => (props.isSmall ? `0.375rem` : `0.5rem`) };
`

LoadingIcon.propTypes = propTypes
LoadingIcon.defaultProps = defaultProps

export default LoadingIcon
