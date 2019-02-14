import * as wcag from "wcag-contrast"
import chroma from "chroma-js"
import Label from "../Label/Label"
import Small from "../Type/Small"
import Code from "../Type/Code"
import P from "../Type/P"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	background: PropTypes.string.isRequired,
	hex: PropTypes.string.isRequired,
	isVerbose: PropTypes.bool,
	name: PropTypes.string.isRequired
}

const defaultProps = {
	isVerbose: false
}

// Get the rounded color contrast value
const colorValue = (color, background = "white") => {
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
	else if(contrastValue < 4.51 && contrastValue > 3) score = `AA Large`
	else score = `F`

	return score
}

// Normalize input color
const normalizeColor = color => {
	const normalizedColor = chroma(color).rgb()

	return `R: ${ normalizedColor[0] } G: ${ normalizedColor[1] } B: ${ normalizedColor[2] }`
}

const NakedColor = props => {
	const calcValue = colorValue(props.hex, props.background)
	const calcScore = colorScore(calcValue)
	const isInvert = calcScore === "F"

	return (
		<div className={ props.className }>
			<div className="hl-color__box" style={ { backgroundColor: props.hex } } />
			<div className="hl-color__meta" style={ { color: props.hex } }>
				<P>
					<b>{calcScore}</b>
				</P>
				<Small>{calcValue}</Small>
			</div>
			<aside>
				<header>
					<P>{props.name}</P>
					{isInvert && <Label label="Low contrast" />}
				</header>
				<div>
					<Code isSmall={ true }>
						{props.hex} &mdash;{` `}
						{normalizeColor(props.hex)}
					</Code>
				</div>
			</aside>
		</div>
	)
}

const Color = styled(NakedColor)`
	display: flex;
	flex-wrap: wrap;

	color: var(--hl-900);

	font-size: 0.9125rem;

	.hl-color__box {
		height: 3rem;
		min-width: 3rem;
		width: 3rem;

		border-radius: 100%;
	}

	.hl-color__meta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 1rem;
		margin-right: 1rem;
		width: 6rem;
	}

	aside div {
		align-items: center;
		display: flex;
	}

	aside div small {
		margin-right: 0.5rem;
	}

	aside header {
		display: flex;
		align-items: center;
	}

	aside header p {
		margin-right: 0.5rem;
	}

	b,
	small {
		display: block;
	}
`

NakedColor.propTypes = propTypes
NakedColor.defaultProps = defaultProps

Color.propTypes = propTypes
Color.defaultProps = defaultProps

export default Color
