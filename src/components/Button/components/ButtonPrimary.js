import DefaultButton from "./DefaultButton"
import styled from "styled-components"

const ButtonPrimary = styled(DefaultButton)`
	background-color: var(--hl-500);
	color: var(--hl-ground);

	&:hover:not(.isLoading):not(.isActive):not(.isDisabled) {
		background-color: var(--hl-700);
	}

	&.isActive:not(.isDisabled),
	&:active:not(.isDisabled),
	&:active:focus:not(.isDisabled) {
		background-color: var(--hl-900);
		color: var(--hl-100);
	}

	&.isDisabled {
		background-color: var(--hl-300);
		color: var(--hl-100);
	}
`

export default ButtonPrimary
