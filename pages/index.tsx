import React, { useState } from 'react'
import { Button, Checkbox, Color, Input, Label, Loading, Progress, Radio, Range, themes, Toggle } from '../src'
import Box from '../components/Box'
import Line from '../components/Line'
import Layout from '../components/Layout'
import Helios from '../components/Helios'

const setValue = e => {
	console.log('setValue', e)
}

const Index = props => {
	const [theme, setTheme] = useState(themes[0])
	const [isLoading, setLoading] = useState(false)
	const [valueRange, setValueRange] = useState(140)

	return (
		<Layout>
			<Box title={ null }>
				<div className="py-6">
					<Helios colors={ theme.colors } />
					<h1 className="h0">Helios</h1>
					<style jsx>{`
						.h0 {
							font-size: 56px;
							line-height: 64px;
						}
					`}</style>
					<h3>Baseline design system.</h3>
				</div>
			</Box>
			<Box title="Color" component={ Color }>
				<div className="grid grid-cols-3 grid-gap-3">
					{Object.entries(theme.colors).map((color, key) => {
						const colorSet = color[0]
						const name = Object.entries(color[1])

						return (
							<div className="flex flex-column" key={ key }>
								{name.map((colorMap, colorKey) => {
									const hex = colorMap[1]
									const background = theme.colors.gray[0]

									return <Color key={ colorKey } hex={ hex } background={ background } name={ colorSet } variant={ colorMap[0] } isVerbose={ true } />
								})}
							</div>
						)
					})}
				</div>
			</Box>
			<Box title="Button" component={ Button }>
				<Line isRow>
					<Button type="primary" value="Default" onClick={ () => setLoading(isLoading ? false : true) } />
					<Button type="primary" value="Active" isActive={ true } />
					<Button type="primary" value="Disabled" isDisabled={ true } />
					<Button type="primary" value="Rounded" isRounded={ true } />
					<Button type="primary" value="Small" isSmall={ true } />
					<Button type="primary" value="Small Rounded" isSmall={ true } isRounded={ true } />
					<Button type="primary" value="Small Rounded" isSmall={ true } isRounded={ true } isLoading={ !isLoading } />
				</Line>
				<Line isRow>
					<Button type="primary" value="Activate" isLoading={ !isLoading } onClick={ setValue } />
					<Button type="primary" value="Activate" isRounded={ true } action={ e => setValue(e) } isLoading={ !isLoading } />
				</Line>
				<Line isRow>
					<Button type="secondary" value="Default" />
					<Button type="secondary" value="Active" isActive={ true } />
					<Button type="secondary" value="Disabled" isDisabled={ true } />
					<Button type="secondary" value="Rounded" isRounded={ true } />
					<Button type="secondary" value="Small" isSmall={ true } />
					<Button type="secondary" value="Small Rounded" isSmall={ true } isRounded={ true } />
					<Button type="secondary" value="Small Rounded" isSmall={ true } isRounded={ true } isLoading={ !isLoading } />
				</Line>
				<Line isRow>
					<Button type="secondary" value="Activate" isLoading={ !isLoading } onClick={ setValue } />
					<Button type="secondary" value="Activate" isRounded={ true } isLoading={ false } onClick={ setValue } />
					<Button type="secondary" value="Activate" isRounded={ true } onClick={ setValue } isLoading={ !isLoading } />
				</Line>
			</Box>
			<Box title="Checkbox" component={ Checkbox }>
				<Checkbox label="Checkbox, hmm" isChecked={ true } check={ e => setValue(e) } />
				<Checkbox label="This is disabled, checked" isChecked={ true } isDisabled={ true } />
				<Checkbox label="This is disabled, unchecked" isChecked={ false } isDisabled={ true } />
			</Box>
			<Box title="Toggle" component={ Toggle }>
				<Toggle label="This is a toggle" isChecked={ true } isDisabled={ false } />
				<Toggle label="This is a toggle" isChecked={ false } isDisabled={ false } />
				<Toggle label="This is a toggle" isChecked={ false } isDisabled={ true } />
			</Box>
			<Box title="Radio" component={ Radio }>
				<Radio label="Val 1" value={ 0 } state={ true } set={ e => setValue(e) } />
				<Radio label="Val 2" value={ 1 } state={ true } set={ e => setValue(e) } />
				<Radio label="Disabled" value={ 4 } state={ true } isDisabled={ true } />
			</Box>
			<Box title="Range" component={ Range }>
				<Line>
					<Range value={ 31 } min={ 0 } max={ 100 } />
					<Range isVerbose value={ valueRange } set={ e => setValueRange(e) } min={ 110 } max={ 340 } />
					<Range value={ 52 } min={ 0 } max={ 100 } />
					<Range value={ 5 } min={ 0 } max={ 100 } step={ 5 } />
				</Line>
			</Box>
			<Box title="Progress" component={ Progress }>
				<progress value={ 22 } />
				<progress value={ 34 } max={ 60 } />
				<progress value={ 100 } />
			</Box>
			<Box title="Input" component={ Input }>
				<Input onChange={ setValue } label="With label" placeholder="https://" />
				<Input onChange={ setValue } value="Without label, with value" />
				<Input onChange={ setValue } label="Number type" type="number" />
				<Input onChange={ setValue } label="Password type" type="password" />
				<Input onChange={ setValue } label="Date type" type="date" />
				<Input onChange={ setValue } label="Textarea type" type="textarea" />
			</Box>
			<Box title="Label" component={ Label }>
				<Line isRow>
					<Label label="Default" />
					<Label color="primary" label="Primary" />
					<Label color="green" label="Green" />
					<Label color="yellow" label="Yellow" />
					<Label color="red" label="Red" />
					<Label color="blue" label="Blue" />
				</Line>
			</Box>
			<Box title="Loading" component={ Loading }>
				<Loading size={ 10 } />
				<Loading size={ 20 } />
				<Loading color="var(--color-gray-900)" size={ 10 } />
				<Loading color="var(--color-gray-900)" size={ 20 } />
			</Box>
			<Box title="Type">
				<h1>Deep blue.</h1>
				<h1>All their equipment and instruments are alive.</h1>
				<h2>I watched the storm, so beautiful yet terrific.</h2>
				<h3>A shining crescent far beneath the flying vessel.</h3>
				<h4>It was going to be a lonely trip back.</h4>
				<h5>Silver mist suffused the deck of the ship.</h5>
				<hr />
				<p>
					Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By
					the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was
					dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking
					down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.
				</p>
				<small>Small</small>
				<p>
					On gaining the summit we found ourselves at the brim of a spacious hollow or basin, which in past ages must have been the crater
					of the volcanic peak. <b>The grassy slopes of the basin</b>
					were laid out in flower gardens and terraces of <cite>coloured</cite> marbles, shaded with sombre trees, and ornamented with
					sculpture. In the bottom lay an oval sheet of water a mile long or more,
					<em>and from the midst of it</em>, towards the near end, a beautiful islet, crowned by a magnificent temple, rose like a{' '}
					<a href="#">mirage to the view</a>, and seemed to float on its glassy bosom.
				</p>
				<code>React.CreateElement()</code>
				<a href="#x" target="_new">
					new Link as A
				</a>
			</Box>
		</Layout>
	)
}

export default Index
