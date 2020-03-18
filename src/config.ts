import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import  'firebase/firestore';

const config = {
  apiKey: "AIzaSyBv21edTcSWQqQYKcYTTyzUXLgU6pzLh90",
  authDomain: "coronacentral-c1113.firebaseapp.com",
  databaseURL: "https://coronacentral-c1113.firebaseio.com",
  projectId: "coronacentral-c1113",
  storageBucket: "coronacentral-c1113.appspot.com",
  messagingSenderId: "841067198513",
  appId: "1:841067198513:web:29c25d8a9826cd20777d10",
  measurementId: "G-FL800TSWHW"
};

const app = firebase.initializeApp(config);

export default app;
