var firebaseConfig = {
  apiKey: "AIzaSyBA0ONs4JjTmi8thz_xZCxWUfD274ASgxY",
  authDomain: "parking-f83f5.firebaseapp.com",
  databaseURL: "https://parking-f83f5-default-rtdb.firebaseio.com",
  projectId: "parking-f83f5",
  storageBucket: "parking-f83f5.appspot.com",
  messagingSenderId: "44218989022",
  appId: "1:44218989022:web:804aa540b4683f4969454f",
  measurementId: "G-QMJDMN512T",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}
