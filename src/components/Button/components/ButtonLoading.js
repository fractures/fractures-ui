import Loading from "../../Loading/Loading"

const ButtonLoading = Loading.extend`
	position: absolute;
	left: ${ props => (props.isSmall ? `0.375rem` : `0.5rem`) };
`

export default ButtonLoading
