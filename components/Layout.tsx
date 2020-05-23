import React, { Component, Fragment } from 'react'
import { themes, Button, Container, Helios } from '../src'
import Head from 'next/head'

class Layout extends Component {
	constructor(props) {
		super(props)

		this.state = { theme: themes[0] }
		this.setTheme = this.setTheme.bind(this)
	}

	setTheme(theme) {
		this.setState({ theme: theme })
	}

	render() {
		const { colors } = this.state.theme
		const mainStyle = { backgroundColor: colors.gray[0], color: colors.gray[900] }

		return (
			<Fragment>
				<Head>
					<title>Helios</title>
					<link href="https://unpkg.com/fractures@1.3.3/dist/fractures.prefixed.min.css" rel="stylesheet" />
					<link
						href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700,700i|Roboto:400,400i,500,500i,700,700i"
						rel="stylesheet"
					/>
					<script
						dangerouslySetInnerHTML={ {
							__html: `
								(function(f, a, t, h, o, m){
								a[h]=a[h]||function(){
								(a[h].q=a[h].q||[]).push(arguments)
								};
								o=f.createElement('script'),
								m=f.getElementsByTagName('script')[0];
								o.async=1; o.src=t; o.id='fathom-script';
								m.parentNode.insertBefore(o,m)
								})(document, window, 'https://cdn.usefathom.com/tracker.js', 'fathom');
								fathom('set', 'siteId', '${ process.env.FATHOM_HELIOS_GUIDE }');
								fathom('trackPageview');
							`
						} }
					/>
				</Head>
				<Helios theme={ this.state.theme.name } />
				<div className="ui-grid" style={ mainStyle }>
					<Container>
						{/* <Nav state={ this.state } setTheme={ this.setTheme } /> */}
						<main className="ui-content">
							{this.props.children}
							<footer className="fixed right-2 bottom-2">
								<div>
									{themes.map((theme, key) => (
										<Button
											onClick={ () => this.setTheme(theme) }
											isActive={ this.state.theme.name === theme.name }
											isSmall={ true }
											key={ key }
											type="secondary"
											value={ theme.name }
										/>
									))}
								</div>
							</footer>
						</main>
					</Container>
					<style jsx global>{`
						html,
						body {
							font-family: var(--font-default);
						}
					`}</style>
				</div>
			</Fragment>
		)
	}
}

export default Layout
