import React from 'react';
import { connect } from 'react-redux';

import PillowForm from './PillowForm';

import './App.css';

import '../bootstrap.min.css';

const App = ({ loading }) => (
  <div className="container">
    { loading ? "LOADING..." : <PillowForm />}
  </div>
);

const stateToProps = (state) => ({
  loading: state.config.status !== 'READY'
});

export default connect(stateToProps)(App);
