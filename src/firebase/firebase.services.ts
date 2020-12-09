import fire from './fire';
import firebase from 'firebase';
import { ITodoRequestSuccsess } from '../interfaces/todo/ITodoRequestSuccsess';
import { ITodoFilter } from '../interfaces/todo/ITodo';

const firestore = firebase.firestore(fire);

// USER

export const loginUser = (email: string, password: string) => {
  fire.auth().signInWithEmailAndPassword(email, password);
};

export const registerUser = (email: string, name: string, password: string) => {
  return fire
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      const uid = fire.auth().currentUser?.uid;
      return firestore.collection('users').doc(uid).set({
        uid,
        email: email,
        password: password,
        name: name,
      });
    });
};

export const getInfoCurrentUser = (uid: string) => {
  return firestore
    .collection('users')
    .doc(uid)
    .get()
    .then((doc) => {
      return doc.data();
    });
};

export const addTodo = (dataAddTodo: ITodoRequestSuccsess) => {
  const key = dataAddTodo.data.userUid + '-' + dataAddTodo.data.todo;

  return firestore.collection('todos').doc(key).set({
    key: key,
    userName: dataAddTodo.data.userName,
    userUid: dataAddTodo.data.userUid,
    todo: dataAddTodo.data.todo,
    dateCompleted: dataAddTodo.data.dateCompleted,
    completed: false,
  });
};

export const getTodos = (data: ITodoFilter) => {
  const dataTodos: firebase.firestore.DocumentData[] = [];
  switch (data.filter) {
    case 'all':
      return firestore
        .collection('todos')
        .where('userUid', '==', firebase.auth().currentUser?.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            dataTodos.push(doc.data());
          });
          return dataTodos;
        });
    case 'action':
      return firestore
        .collection('todos')
        .where('userUid', '==', firebase.auth().currentUser?.uid)
        .where('completed', '==', false)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            dataTodos.push(doc.data());
          });
          return dataTodos;
        });

    case 'done':
      return firestore
        .collection('todos')
        .where('userUid', '==', firebase.auth().currentUser?.uid)
        .where('completed', '==', true)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            dataTodos.push(doc.data());
          });
          return dataTodos;
        });

    case 'search':
      return firestore
        .collection('todos')
        .where('userUid', '==', firebase.auth().currentUser?.uid)
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().todo.includes(data.value))
              dataTodos.push(doc.data());
          });
          return dataTodos;
        });
    default:
  }
};

export const completeTodo = (todo: string) => {
  return firestore
    .collection('todos')
    .doc(firebase.auth().currentUser?.uid + '-' + todo)
    .get()
    .then((doc) => {
      return firestore
        .collection('todos')
        .doc(firebase.auth().currentUser?.uid + '-' + todo)
        .set({
          ...doc.data(),
          completed: true,
        });
    });
};

export const deleteTodo = (todo: string) => {
  return firestore
    .collection('todos')
    .doc(firebase.auth().currentUser?.uid + '-' + todo)
    .delete();
};
