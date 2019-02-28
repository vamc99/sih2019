import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyBL2HO_8mkT72wfP9l4RASaQJJAq0HO7OI",
    authDomain: "fir-authentication-c708f.firebaseapp.com",
    databaseURL: "https://fir-authentication-c708f.firebaseio.com",
    projectId: "fir-authentication-c708f",
    storageBucket: "fir-authentication-c708f.appspot.com",
    messagingSenderId: "175935160935"
  };

  class Firebase {
    constructor() {
      app.initializeApp(config);
      this.auth = app.auth();
      this.db = app.database();
    }

    // *** Auth API ***
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () =>
        this.auth.signOut();

    doPasswordReset = email =>
        this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
        this.auth.currentUser.updatePassword(password);

    doWriteUserdata = (username,email,password) =>
        this.db.ref('Userslist/').push({username,email,password});

    user = uid => this.db.ref('users/${uid}');

    users = () => this.db.ref('users');

  }

  export default Firebase;
