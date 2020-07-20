  import firebase from 'firebase'
  // import firestore from 'firebase/firestore'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCf0DJLld0wOrkEI70w-y8h6gTeGpRRPsc",
    authDomain: "ovidiuinvatavuesmoothies.firebaseapp.com",
    databaseURL: "https://ovidiuinvatavuesmoothies.firebaseio.com",
    projectId: "ovidiuinvatavuesmoothies",
    storageBucket: "ovidiuinvatavuesmoothies.appspot.com",
    messagingSenderId: "213962890725",
    appId: "1:213962890725:web:a66afa2f0c8961a9da630c"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  // firebaseApp.firestore().settings({ timestampsInSnapshots: true })


  // export firestore database
  export default firebaseApp.firestore()
