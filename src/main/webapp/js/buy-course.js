var config = {
    apiKey: "AIzaSyC5AKG70BWISQlGvzsWtJsp_GkEXwawNFQ",
    authDomain: "freecodeschoollms.firebaseapp.com",
    databaseURL: "https://freecodeschoollms.firebaseio.com",
    projectId: "freecodeschoollms",
    storageBucket: "freecodeschoollms.appspot.com",
    messagingSenderId: "574690181313"
};
firebase.initializeApp(config);
// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();

// Disable deprecated features
db.settings({
    timestampsInSnapshots: true
});


var pathname = window.location.pathname;
console.log("path name: " + pathname);
$("#buy").click(function () {

})