import React from 'react';
import { connect } from 'react-redux';

import { updateAttribute } from '../actions';

class Input extends React.PureComponent {
  constructor(props) {
    super(props);

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  isChecked() {
    return this.isCheckable() && (this.props.checked || this.props.defaultChecked);
  }

  isCheckable() {
    return this.props.type === 'checkbox' || this.props.type === 'radio';
  }

  initialValue() {
    return this.props.value || this.props.defaultValue;
  }

  dispatchUpdateAttribute(attributeName, value) {
    this.props.dispatch(updateAttribute({ attributeName, value }));
  }

  componentDidMount() {
    if(this.isCheckable() && !this.isChecked()){ return; }

    this.setInitialValues();
  }

  setInitialValues() {
    this.dispatchUpdateAttribute(this.props.name, this.initialValue());
  }

  onChangeHandler(event) {
    this.dispatchUpdateAttribute(event.target.name, event.target.value);
  }

  render() {
    const { dispatch, ...inputProps} = this.props;
    return (
      <input {...inputProps} onInput={this.onChangeHandler} onChange={this.onChangeHandler} />
    )
  }
};

Input = connect()(Input);

export default Input;
