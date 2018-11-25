import classNames from "@sindresorhus/class-names"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

// TODO @pyx Remove these deps
const wcag = require("wcag-contrast")
const chroma = require("chroma-js")

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
	const colorClasses = classNames("fr-color__box", {
		"fr-color__box--invert": isInvert
	})

	return (
		<div className={ props.className }>
			<div className={ colorClasses } style={ { backgroundColor: props.hex } }>
				<small>
					<b>{calcScore}</b>
					<span>{calcValue}</span>
				</small>
			</div>
			<aside>
				<b className="fr-color__name">{props.name}</b>
				<small>
					{props.hex}, {normalizeColor(props.hex)}
				</small>
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
		align-items: center;
		display: flex;
		margin-right: 1rem;
		padding: 0.75rem;
		width: 6.5rem;

		border-radius: 0.125rem;
		color: var(--fr-ground);
	}

	.fr-color__box--invert {
		color: var(--fr-900);
	}

	.fr-color__name {
		line-height: 1.5;
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
