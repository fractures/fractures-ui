export default props => (
	<div className={`fr-container mx-auto ${props.className ? `${props.className}` : ``}`}>
		{props.children}
		<style jsx global>{`
			@media (max-width: 1120px) {
				.fr-container {
					margin-left: 1.5rem !important;
					margin-right: 1.5rem !important;

					max-width: calc(100% - 3rem) !important;
				}
			}

			.fr-container {
				max-width: 100%;
				width: 1060px;
			}
		`}</style>
	</div>
)
