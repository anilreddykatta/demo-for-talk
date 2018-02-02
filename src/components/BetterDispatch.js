import React from 'react'

class BetterDispatch extends React.Component {
  handleChange = () => {
    this.props.dispatchUserFetch() // reducer of this action should set loadingState = true
  }

  render() {
    return (
      <div className="BadDispatch">
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}

type ACTION_TYPE = 'OPEN_DIALOG' | 'CLOSE_DIALOG'

export default BetterDispatch
