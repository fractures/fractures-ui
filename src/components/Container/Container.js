import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const propTypes = {
	className: PropTypes.string,
	children: PropTypes.node.isRequired
}

const Container = styled.div`
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	width: 1060px;
	
	@media screen and (max-width: 1120px) {
		margin-left: 1.5rem !important;
		margin-right: 1.5rem !important;
		max-width: calc(100% - 3rem) !important;
	}
`

Container.propTypes = propTypes

export default Container
