import React from 'react'

export default class BigComponent extends React.PureComponent {
  render() {
    const { bigComponent, data = [] } = this.props
    const start = performance.now()
    const tree = (
      <div>
        <h1>Change - {bigComponent}</h1>
        <ul>{data.map(elem => <li>{elem}</li>)}</ul>
        <button onClick={this.props.onClick} />
      </div>
    )
    console.log(`Time taken Big Component: ${performance.now() - start}`)
    return tree
  }
}
