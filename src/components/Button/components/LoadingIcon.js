import Loading from "../../Loading/Loading"
import PropTypes from "prop-types"

const propTypes = { isSmall: PropTypes.string }
const defaultProps = { isSmall: "0.5rem" }

const LoadingIcon = Loading.extend`
	position: absolute;
	left: ${ props => (props.isSmall ? `0.375rem` : `0.5rem`) };
`

LoadingIcon.propTypes = propTypes
LoadingIcon.defaultProps = defaultProps

export default LoadingIcon
