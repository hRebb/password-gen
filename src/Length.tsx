import React from 'react'
import InputRange from 'react-input-range'
import './App.css'
import { Range } from 'react-input-range'


export default class Length extends React.Component<{}, { value: number | Range }> {
  constructor(props: number) {
    super(props);

    this.state = {
      value: { min: 5, max: 20 },
    };
  }
  render(): React.ReactNode {
    return (
      <form className="form">
        <InputRange
        minValue={5}
        maxValue={20}
        value={this.state.value}
        onChange={(value: number | Range): void => {
          return this.setState({ value });
        }}
      />
      </form>
    )
  }
}




