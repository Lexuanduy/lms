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

db.collection("courses").where("url", "==", "website-php-laravel")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            console.log("document id: " + doc.id);
            var obj = JSON.parse(JSON.stringify(doc.data()));
            console.log(obj.name);
            // document.getElementById('name_course').innerHTML(obj.name);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });

    