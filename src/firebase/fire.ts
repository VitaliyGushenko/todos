import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyD-YEKcRPPjkiLbLOF7iG9khyaINiDh77s',
  authDomain: 'todolist-72e41.firebaseapp.com',
  databaseURL: 'https://todolist-72e41.firebaseio.com',
  projectId: 'todolist-72e41',
  storageBucket: 'todolist-72e41.appspot.com',
  messagingSenderId: '709689714890',
  appId: '1:709689714890:web:2284496f59f6beac87ec33',
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
