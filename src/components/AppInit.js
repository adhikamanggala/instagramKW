import React, { Component } from 'react';
import firebase from '@firebase/app';
import '@firebase/auth'
import Main from './Main';
import { alreadyLogin, notLoginYet } from '../actions'
import { connect } from 'react-redux'
class AppInit extends Component {


  componentDidMount() {
    // Initialize Firebase
    var config = {
      apiKey: 'AIzaSyBPpBlBYo96xR7m8NpEtVBjwzmnIeAVbeE',
      authDomain: 'managerjc7-32374.firebaseapp.com',
      databaseURL: 'https://managerjc7-32374.firebaseio.com',
      projectId: 'managerjc7-32374',
      storageBucket: 'managerjc7-32374.appspot.com',
      messagingSenderId: '482917547559'
    };
    if (firebase.apps.length === 0) {
      firebase.initializeApp(config);
    }


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.alreadyLogin(user);
      } else {
        this.props.notLoginYet();
      }
    });
  }

  render() {
    return (
      <Main />
    );
  }
}
export default connect(null, { alreadyLogin, notLoginYet })(AppInit);