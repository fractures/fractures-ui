import { propTypes, defaultProps } from "./Button.proptypes"
import ButtonPrimary from "./components/ButtonPrimary"
import ButtonSecondary from "./components/ButtonSecondary"
import classNames from "@sindresorhus/class-names"
import LoadingIcon from "./components/LoadingIcon"
import React from "react"

const Button = props => {
	const buttonClasses = classNames({
		isActive: props.isActive,
		isDisabled: props.isDisabled,
		isLoading: props.isLoading,
		isRound: props.isRounded,
		isSmall: props.isSmall
	})

	const LoadingColor = props.type === "secondary" ? "var(--hl-500)" : null

	return (
		<div style={ { position: "relative", display: "inline-flex", alignItems: "center" } } onClick={ e => props.onClick(e) }>
			{props.type === "primary" && <ButtonPrimary { ...props } className={ buttonClasses } />}
			{props.type === "secondary" && <ButtonSecondary { ...props } className={ buttonClasses } />}
			{props.isLoading && <LoadingIcon color={ LoadingColor } size={ props.isSmall ? 10 : 20 } />}
		</div>
	)
}

Button.propTypes = propTypes
Button.defaultProps = defaultProps

export default Button
