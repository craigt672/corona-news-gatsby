import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import  'firebase/firestore';

const config = {
  apiKey: "AIzaSyBRznCQtr9LSW503tm9phzSviWiXHLY76o",
  authDomain: "tajthefuture.firebaseapp.com",
  databaseURL: "https://tajthefuture.firebaseio.com",
  projectId: "tajthefuture",
  storageBucket: "tajthefuture.appspot.com",
  messagingSenderId: "707699478430",
  appId: "1:707699478430:web:7ab531596e5ec2dd5c108f",
  measurementId: "G-WCSZ9G4TKD"
};

const app = firebase.initializeApp(config);

export default app;
