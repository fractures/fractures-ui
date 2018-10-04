import DefaultButton from "./DefaultButton"
import styled from "styled-components"

const ButtonPrimary = styled(DefaultButton)`
	background-color: var(--fr-500);
	color: var(--fr-ground);

	&:hover:not(.isLoading):not(.isActive):not(.isDisabled) {
		background-color: var(--fr-700);
	}

	&.isActive:not(.isDisabled),
	&:active:not(.isDisabled),
	&:active:focus:not(.isDisabled) {
		background-color: var(--fr-900);
		color: var(--fr-100);
	}

	&.isDisabled {
		background-color: var(--fr-300);
		color: var(--fr-100);
	}
`

export default ButtonPrimary
