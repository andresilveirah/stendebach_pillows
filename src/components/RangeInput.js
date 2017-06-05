import React from 'react';
import '../bootstrap.min.css'

const start = 'bis';
const end = 'von';

class RangeInput extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { current: props.defaultValue }

    this.updateScore = this.updateScore.bind(this);
    this.prefix = this.prefix.bind(this);
    this.score = this.score.bind(this);
  }
  
  updateScore(event) {
    this.setState({ current: event.target.value });
  }

  prefix(current, min, max) {
    if (current === min) {
      return start;
    } else if (current === max) {
      return end;
    } else {
      return "";
    }
  };

  score(current, min, max) {
    return this.prefix(current, min, max) + " " + current + " cm";
  }

  render() {
    const { label, ...inputProps } = this.props;
    const score = this.score(this.state.current, inputProps.min, inputProps.max);

    return (
      <div className="form-group row range-container">
        <label htmlFor={inputProps.name} className="col-sm-3 col-form-label">{label}</label>
        <div className="col-sm-4">
          <input type="range" className="form-control" onChange={this.updateScore} onInput={this.updateScore} {...inputProps} />
        </div>
        <span className="col-sm-2 score">{score}</span>
      </div>
    );
  }
};

export default RangeInput;
