import * as helios from '@helios-ui/helios'
import Helios from './Helios'

const { Label } = helios
const stableComponents = ['A', 'Button', 'ButtonGroup', 'Code', 'Container']
const wipComponents = ['Color', 'Loading', 'themes', 'Fractures', 'Input']

const excludedComponents = ['Color']
const exlude = item => !item.includes(excludedComponents) && item
const components = Object.keys(helios).filter(exlude)

const NavItem = props => (
	<li className="flex flex-between flex-ycenter">
		<a href={ props.href }>{props.name}</a>
		{props.isStable && <Label label="Stable" />}
		{props.isWIP && <Label color="yellow" label="WIP" />}
	</li>
)

const Nav = ({ state }) => (
	<div className="helios-nav py-3">
		<nav className="sticky top-1">
			<a href="#">
				<Helios { ...state.theme.colors } />
			</a>
			<ol className="grid">
				{components.map((component, key) => {
					const isComponentStable = stableComponents.includes(component)
					const isComponentWIP = wipComponents.includes(component)

					return <NavItem key={ key } href={ `#${ component }` } name={ component } isWIP={ isComponentWIP } isStable={ isComponentStable } />
				})}
			</ol>
		</nav>
		<style jsx global>{`
			.helios-nav ol {
				grid-auto-rows: minmax(1rem, auto);
				grid-gap: 2px;
				grid-template-columns: repeat(6, 1fr);
				padding: 2px;

				background: var(--color-gray-100);
			}

			.helios-nav ol li {
				padding: 0.5rem;

				background: var(--color-gray-0);
			}
		`}</style>
	</div>
)

export default Nav
