import React from 'react'

let timeStamp = 0

class ListComponent extends React.PureComponent {
  render() {
    const t = performance.now()
    const { data } = this.props
    const elem = <ul>{data.map(elem => <li>{elem}</li>)}</ul>
    console.log(`Time taken Better Component List Component: ${performance.now() - t}`)
    return elem
  }
}

export default class BetterVersion extends React.PureComponent {
  render() {
    const { bigComponent } = this.props
    const tree = (
      <div>
        <h1>{bigComponent}</h1>
        <ListComponent data={this.props.data} />
        <button onClick={this.props.onClick} />
      </div>
    )
    return tree
  }
}
