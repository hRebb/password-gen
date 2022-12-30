import React from 'react'
import InputRange from 'react-input-range'
import './App.css'

interface valueProps {
  value: number;
  value2: number;
  value3: number;
  value4: {
    min: number;
    max: number;
  };
  value5: {
    min: number;
    max: number;
  };
}


export default class Length extends React.Component<{}, valueProps> {
  constructor(props: {}) {
    super(props);

    this.state = {
      value: 5,
      value2: 10,
      value3: 10,
      value4: {
        min: 5,
        max: 10,
      },
      value5: {
        min: 5,
        max: 15,
      },
    };
  }

  render(): JSX.Element {
    return (
      <form className="form">
        <InputRange
          maxValue={20}
          minValue={5}
          value={this.state.value}
          onChange={(value: number): void => {
            return this.setState({ value });
          }}
        />
      </form>
    );
  }
}




