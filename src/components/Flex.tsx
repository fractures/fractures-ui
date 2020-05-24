import { HeliosScaleType } from '../types/scale'
import styled from 'styled-components'

interface FlexProps {
	gap?: HeliosScaleType
	isColumn?: boolean
}

const Flex: React.FC<FlexProps> = styled.div`
	display: flex;
	flex-direction: ${ props => (props.isColumn ? 'column' : 'row') };

	// Naive handle gaps
	${ props => (props.gap ? (props.isColumn ? `& > * + * {margin-top: ${ props.gap }px;}` : `& > * + * {margin-left: ${ props.gap }px;}`) : ``) }
`

export default Flex
