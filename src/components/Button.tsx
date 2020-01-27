import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import classNames from '@sindresorhus/class-names'
import LoadingIcon from './LoadingIcon'
import React from 'react'

const Button = props => {
	const buttonClasses = classNames({
		isActive: props.isActive,
		isDisabled: props.isDisabled,
		isLoading: props.isLoading,
		isRound: props.isRounded,
		isSmall: props.isSmall
	})

	const LoadingColor = props.type === 'secondary' ? 'var(--color-gray-300)' : 'var(--color-gray-100)'

	return (
		<div style={ { position: 'relative', display: 'inline-flex', alignItems: 'center' } } onClick={ e => props.onClick(e) }>
			{props.type === 'primary' && <ButtonPrimary { ...props } className={ buttonClasses } />}
			{props.type === 'secondary' && <ButtonSecondary { ...props } className={ buttonClasses } />}
			{props.isLoading && <LoadingIcon color={ LoadingColor } size={ props.isSmall ? 10 : 20 } />}
		</div>
	)
}

export default Button
