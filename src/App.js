import React, { Component } from 'react'
import TriggerTest from './Components/TriggerTest';
import HoverTest from './Components/HoverTest';
import ReactHover from 'react-hover'

const optionsCursorTrueWithMargin = {
  followCursor: true,
  shiftX: -200,
  shiftY: 0
}

export default class App extends Component {

  render() {
    return (
      <div className="App">
      <ReactHover options={optionsCursorTrueWithMargin}>
      <ReactHover.Trigger type='trigger'>
        <TriggerTest/>
      </ReactHover.Trigger>
      <ReactHover.Hover type='hover'>
        <HoverTest />
      </ReactHover.Hover>
      </ReactHover>
      </div>
    )
  }
}
