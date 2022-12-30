import React from 'react'
import InputRange from 'react-input-range'
import { Range } from 'react-input-range'
import './App.css'

type LengthState = {
  value: { min: number, max: number },
}


class Length extends React.Component<{}, LengthState> {
  constructor(props: any) {
    super(props)
    this.state = {
      value: { min: 5, max: 20 },
    };
  }

  render(): JSX.Element {
    return (
      <InputRange
        minValue={5}
        maxValue={20}
        value={this.state.value}
        onChange={(value: Range ) => this.setState({ value })}
      />
    );
  }
}

export default Length;




