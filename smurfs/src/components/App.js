import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchSmurf, AddSmurf, DeleteSmurf } from '../actions/index';

import SmurfList from './SmurfList';
import SmurfForm from './SmurfForm';

const App = props => {
  useEffect(() => {
    props.FetchSmurf();
  }, []);

  return (
    <div>
      <SmurfForm />
      {props.smurfs.map(smurf => (
      <SmurfList smurf={smurf} key={smurf.id} DeleteSmurf={props.DeleteSmurf}
      />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    error: state.error
  };
};

export default connect(mapStateToProps, { FetchSmurf, AddSmurf, DeleteSmurf })(App);
