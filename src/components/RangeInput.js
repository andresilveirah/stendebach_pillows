import React from 'react';

import ScoreLabel from './ScoreLabel';
import Input from './Input';
import '../bootstrap.min.css'

const RangeInput = (props) => {
  const { value, label, ...inputProps } = props;
  const defaultInputProps = {
    defaultValue: inputProps.min,
    ...inputProps
  };

  return (
    <div className="form-group row range-container">
      <label htmlFor={defaultInputProps.name} className="col-sm-3 col-form-label">{label}</label>
      <div className="col-sm-4">
        <Input type="range" className="form-control" {...defaultInputProps} />
      </div>
      <ScoreLabel min={defaultInputProps.min} max={defaultInputProps.max} current={value || defaultInputProps.defaultValue} />
    </div>
  );
}

export default RangeInput;
