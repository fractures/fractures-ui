import React from 'react'

const Line = props => <div className={ props.isRow ? `py-1 flex flex-gap-1` : `py-1 flex flex-gap-1 flex-column` }>{props.children}</div>

export default Line
