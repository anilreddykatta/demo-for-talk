import React from 'react'

class BadDispatch extends React.Component {
  handleChange = () => {
    this.props.dispatchUserFetch() // initiate request
    this.props.setLoading() // set isLoading=true to indicate request is in progress
    /*
      this.props.dispatchUserFetch();
      // action.js
      export function dispatchUserFetch() {
        return (dispatch) => {
          dispatch({type: USER_FETCH})
          dispatch({type: SET_LOADING_STATE})
        }
      }
    */
  }

  render() {
    return (
      <div className="BadDispatch">
        <button onClick={this.handleChange}>Change</button>
      </div>
    )
  }
}

export default BadDispatch
