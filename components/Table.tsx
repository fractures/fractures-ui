import React from 'react'

const Table = ({ props }) => {
	if(!props) return null

	const propsArray = Object.entries(props)
	const displayValue = value => {
		const isBoolean = Boolean(typeof value === 'boolean')
		const isZero = Boolean(value === 0)
		const isEmptyString = Boolean(typeof value === 'string') && value === ''
		const isNull = typeof value === 'object' && !value

		if(isNull) return `null`
		else if(isEmptyString) return `""`
		else if(value || isBoolean || isZero) return value.toString()
	}

	return (
		<div>
			<div className="table w-100">
				<div className="flex table-line">
					<div className="grow-2">
						<p>Name</p>
					</div>
					<div className="grow-4">
						<p>Type</p>
					</div>
					<div className="grow-1">
						<p>Required</p>
					</div>
					<div className="grow-1">
						<p>defaultValue</p>
					</div>
				</div>

				{propsArray.map((prop, key) => {
					const name: any = prop[0]
					const value: any = prop[1]

					if(!value) return null

					const defaultValue = value.defaultValue ? displayValue(value.defaultValue.value) : '-'
					const typeName = value.type.name

					return (
						<div className="flex table-line" key={ key }>
							<div className="flex flex-ycenter grow-2">
								<p>{name}</p>
							</div>
							<div className="flex flex-ycenter grow-4">
								<code>{typeName}</code>
								{typeName === 'oneOf' && (
									<code>
										{`: `}
										{value.type.value.join(', ')}
									</code>
								)}
							</div>
							<div className="flex flex-ycenter grow-1">
								<code>{value.required ? 'yes' : '-'}</code>
							</div>
							<div className="flex flex-ycenter grow-1">
								<code>{defaultValue}</code>
							</div>
						</div>
					)
				})}
			</div>
			<style jsx>{`
				.table {
					border-top: 1px solid var(--color-gray-100);

					text-align: left;
					word-break: initial;
				}

				.table .table-line:first-child {
					font-weight: bold;
				}

				.table-line {
					border-bottom: 1px solid var(--color-gray-100);
					border-right: 1px solid var(--color-gray-100);
				}

				.table-line > * {
					padding: 0.25rem 0.5rem;

					border-left: 1px solid var(--color-gray-100);
				}
			`}</style>
		</div>
	)
}

export default Table
