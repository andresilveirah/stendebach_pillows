import React from 'react';
import { connect } from 'react-redux';

import BodyMeasurements from './BodyMeasurements';
import SleepingPosition from './SleepingPosition';
import MattressType from './MattressType';
import FormFooter from './FormFooter';
import PillowModal from './PillowModal';

import { getPillow } from '../reducers';

import '../bootstrap.min.css'

class PillowForm extends React.PureComponent {
  constructor() {
    super();
    this.state = { showModal: false }
    this.formSubmitHandler = this.formSubmitHandler.bind(this);
    this.onCloseModalClick = this.onCloseModalClick.bind(this);
  }

  formSubmitHandler(event) {
    event.preventDefault();
    this.showModal();
  }

  showModal() {
    this.setState({ showModal: true });
  }

  onCloseModalClick(event) {
    event.preventDefault();
    this.setState({ showModal: false });
  }

  render() {
    return (
      <form action="#" onSubmit={this.formSubmitHandler}>
        <BodyMeasurements />
        <SleepingPosition />
        <MattressType />
        <FormFooter />
        <PillowModal
          showModal={this.state.showModal}
          onCloseModalClick={this.onCloseModalClick}
          pillow={this.props.pillow}
        />
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  pillow: getPillow(state)
});

PillowForm = connect(mapStateToProps)(PillowForm);

export default PillowForm;
