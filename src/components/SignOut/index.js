import React from 'react';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';


const SignOutButton = ({ firebase }) => (
  <button type="button" onClick={firebase.doSignOut} >
    Sign Out
  </button>
);

export default withFirebase(SignOutButton);
