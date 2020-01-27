import * as wcag from 'wcag-contrast'
import chroma from 'chroma-js'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

const propTypes = {
	background: PropTypes.string.isRequired,
	hex: PropTypes.string.isRequired,
	isVerbose: PropTypes.bool,
	name: PropTypes.string.isRequired,
	variant: PropTypes.number.isRequired
}

const defaultProps = {
	name: '',
	isVerbose: false,
	variant: 0
}

// Get the rounded color contrast value
const colorValue = (color, background = 'white') => {
	const normalizedColor = chroma(color).hex()
	const normalizedBackgroundColor = chroma(background).hex()

	const wcagScore = wcag.hex(normalizedColor, normalizedBackgroundColor)
	const contrastNumber = Number(wcagScore).toFixed(2)

	return contrastNumber
}

// Get color contrast score from contrast score value
const colorScore = contrastValue => {
	let score

	if(contrastValue > 7) score = `AAA`
	else if(contrastValue >= 4.51) score = `AA`
	else if(contrastValue < 4.51 && contrastValue > 3) score = `AA L`
	else score = `F`

	return score
}

// Normalize input color
// const normalizeColor = color => {
// 	const normalizedColor = chroma(color).rgb()
//
// 	return `R: ${ normalizedColor[0] } G: ${ normalizedColor[1] } B: ${ normalizedColor[2] }`
// }

const NakedColor = props => {
	const calcValue = colorValue(props.hex, props.background)
	const calcScore = colorScore(calcValue)
	const hasFailingContrast = Boolean(calcScore === 'F')
	const color = hasFailingContrast ? 'currentColor' : props.hex

	return (
		<div className={ props.className }>
			<div className="hl-color__box" style={ { backgroundColor: props.hex } } />
			{props.isVerbose && (
				<div className="hl-color__a11y" style={ { color: color } }>
					<small>
						<b>{calcScore}</b>
					</small>
					<small>{calcValue}</small>
				</div>
			)}
			<div className="hl-color__meta" style={ { color: color } }>
				<p>
					<b>
						{props.name} {props.variant}
					</b>
				</p>
				<small>
					{props.hex}
					{/* {normalizeColor(props.hex)} */}
				</small>
			</div>
		</div>
	)
}

const Color = styled(NakedColor)`
	display: flex;

	color: var(--color-gray-900);

	.hl-color__box {
		height: 3rem;
		min-width: 3rem;
		width: 3rem;
	}

	.hl-color__a11y {
		display: flex;
		flex-direction: column;
		height: 3rem;
		justify-content: center;
		min-width: 3rem;
		padding: 0 0.5rem;
		width: 3rem;
	}

	.hl-color__meta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 1rem;
		margin-right: 1rem;
		width: 6rem;
	}
`

Color.propTypes = propTypes
Color.defaultProps = defaultProps

export default Color
