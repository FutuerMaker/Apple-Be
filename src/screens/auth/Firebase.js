import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAWgrmPOzqw5v-uUZc81qkM2BgHJQ7KVdU",
  authDomain: "appleb-29a86.firebaseapp.com",
  projectId: "appleb-29a86",
  storageBucket: "appleb-29a86.appspot.com",
  messagingSenderId: "258392982221",
  appId: "1:258392982221:web:7c3ab8fe0b63d0f2875f84"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Now you can access Firebase services, like auth, using the initialized app instance
const auth = firebase.auth();