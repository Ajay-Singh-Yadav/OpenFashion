// firebase.js
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBJIsngoOicF-RqAZ2PeCxxw-TgluAMJfA',
  authDomain: 'signin-example-571ec.firebaseapp.com',
  projectId: 'signin-example-571ec',
  storageBucket: 'signin-example-571ec.appspot.com',
  messagingSenderId: '922513545079',
  appId: '1:922513545079:web:a00dc5529bdbced7b2f372',
  measurementId: 'G-NCSJCGE5X1',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
