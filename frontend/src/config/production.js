const firebaseConfig = {
  apiKey: "AIzaSyATQGMNM9nAKbo7q8mlNWw85DqnSLCrNto",
  authDomain: "duanbdsteam03.firebaseapp.com",
  databaseURL: "https://duanbdsteam03.firebaseio.com",
  projectId: "duanbdsteam03",
  storageBucket: "duanbdsteam03.appspot.com",
  messagingSenderId: "377181074786",
  appId: "1:377181074786:web:c2e355c873f83b8a04a83b",
  measurementId: "G-5BSRKHDFV8"
};
// Cloud Functions
const backendUrl = `https://us-central1-${
  firebaseConfig.projectId
  }.cloudfunctions.net/api/api`;

// App Engine
// const backendUrl = `<insert app engine url here>`;

export default {
  firebaseConfig,
  backendUrl,
};
