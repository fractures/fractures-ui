import Loading from "../../Loading/Loading"
import PropTypes from "prop-types"

const propTypes = { isSmall: PropTypes.string }
const defaultProps = { isSmall: "0.5rem" }

const ButtonLoading = Loading.extend`
	position: absolute;
	left: ${ props => (props.isSmall ? `0.375rem` : `0.5rem`) };
`

ButtonLoading.propTypes = propTypes
ButtonLoading.defaultProps = defaultProps

export default ButtonLoading
