import React, { Component } from 'react'
import TrigerTile from './Components/TrigerTile';
import HoverTest from './Components/HoverTest';
import ReactHover from '..'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <ReactHover.Trigger type='trigger'>
        <TrigerTile/>
      </ReactHover.Trigger>
      <ReactHover.Trigger type='hover'>
        <HoverTest />
      </ReactHover.Trigger>
      </div>
    )
  }
}
