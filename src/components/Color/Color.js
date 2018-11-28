import * as wcag from "wcag-contrast"
import chroma from "chroma-js"
import classNames from "@sindresorhus/class-names"
import Label from "../Label/Label"
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

	return `rgba(${ normalizedColor[0] }, ${ normalizedColor[1] }, ${ normalizedColor[2] })`
}

const NakedColor = props => {
	const calcValue = colorValue(props.hex, props.background)
	const calcScore = colorScore(calcValue)
	const isInvert = calcScore === "F"
	const metaClasses = classNames("fr-color__meta", {
		"fr-color__meta--invert": isInvert
	})

	return (
		<div className={ props.className }>
			<div className="fr-color__box" style={ { backgroundColor: props.hex } } />
			<div className={ metaClasses } style={ { color: props.hex } }>
				<b>{calcScore}</b>
				<small>{calcValue}</small>
			</div>
			<aside>
				<b>{props.name}</b>
				<Label>
					{props.hex}, {normalizeColor(props.hex)}
				</Label>
			</aside>
		</div>
	)
}

const Color = styled(NakedColor)`
	display: flex;
	flex-wrap: wrap;

	color: var(--fr-900);

	font-size: 0.9125rem;

	.fr-color__box {
		height: 3.5rem;
		min-width: 3.5rem;
		width: 3.5rem;

		border-radius: 100%;
	}

	.fr-color__meta {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-left: 1rem;
		margin-right: 1rem;
		width: 6rem;
	}

	.fr-color__meta--invert {
		color: var(--fr-900) !important;
	}

	aside {
		flex-direction: column;
		display: flex;
		justify-content: center;
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
