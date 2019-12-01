import React, { Component } from 'react'
import TrigerTile from './Components/TrigerTile';
import HoverTest from './Components/HoverTest';
import ReactHover from 'react-hover'

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <ReactHover>
      <ReactHover.Trigger>
        <TrigerTile/>
      </ReactHover.Trigger>
      <ReactHover.Hover>
        <HoverTest />
      </ReactHover.Hover>

      </ReactHover>
      </div>
    )
  }
}
