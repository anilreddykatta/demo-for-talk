import React, { Component } from 'react'

import BigComponent from './components/BigComponent'
import BetterVersion from './components/BetterVersion'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  state = { bigComponent: false, data: [] }
  componentWillMount() {
    const data = []
    for (var i = 0; i < 20000; i++) {
      data.push(i)
    }
    this.setState({
      data
    })
  }
  changeBigData = () => {
    this.setState({
      bigComponent: !this.state.bigComponent
    })
  }
  changeInApp = () => {
    this.setState({
      something: 'awesome'
    })
  }
  betterClick = () => {}
  render() {
    const { bigComponent, data } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro" />
        <button onClick={this.changeBigData}>Change</button>
        <button onClick={this.changeInApp}>Something</button>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <BigComponent bigComponent={bigComponent} data={data} onClick={() => this.betterClick()} />
          <BetterVersion bigComponent={bigComponent} data={data} onClick={this.betterClick} />
        </div>
      </div>
    )
  }
}

export default App
