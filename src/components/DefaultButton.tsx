import NakedButton from './NakedButton'
import styled from 'styled-components'

const DefaultButton = styled(NakedButton)`
	padding: 0.25rem 1rem;

	border: 0;
	border-radius: ${ props => (props.isRounded ? `2.5rem` : `0.25rem`) };
	outline: none;
	transition: background-color 100ms ease-in-out, box-shadow 100ms ease-in-out, padding-left 100ms ease-in-out;

	cursor: pointer;
	font-size: 0.875rem;
	font-weight: 500;
	line-height: 2rem;

	&.isSmall {
		padding: 0.125rem 0.5rem;

		font-size: 0.75rem;
		line-height: 1.5rem;
	}

	&.isSmall:focus,
	&.isSmall:focus:hover {
		box-shadow: inset 0 0 0 1px var(--color-gray-500), 0 0 0 0.125rem var(--color-gray-100);
	}

	&:focus {
		z-index: 1;
	}

	&:focus:not(.isDisabled):not(.isLoading):not(.isSmall) {
		box-shadow: 0 0 0 0.1875rem var(--color-gray-100);
	}

	&.isLoading {
		padding-left: 2.5rem;

		color: var(--color-gray-300);

		pointer-events: none;
	}

	&.isLoading.isSmall {
		padding-left: 1.75rem;
	}
`

export default DefaultButton
