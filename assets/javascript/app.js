//put into array
//maybe check letter casing and rewrite in camelcase
//check if numbers are in the right format
//if not, give an error message
//store the information in firebase

//firebase config
const config = {
    apiKey: "AIzaSyBw9TjCqqffgXP-TKUUFiNQlbSIoqf2drQ",
    authDomain: "minimal-train-scheduler.firebaseapp.com",
    databaseURL: "https://minimal-train-scheduler.firebaseio.com",
    projectId: "minimal-train-scheduler",
    storageBucket: "minimal-train-scheduler.appspot.com",
    messagingSenderId: "560193805039",
    appId: "1:560193805039:web:6b9344bb4c960f9f"
};

firebase.initializeApp(config);
var database = firebase.database();

//global variables
var trainName;
var destination;
var firstTrainTime;
var frequency;

//when form is submitted, get values
$(".schedule-form").on("submit", function(event) {
    //prevent page from refreshing
    event.preventDefault();
    //get values from form fields and trim the white space
    trainName = $("#train-name").val().trim();
    destination = $("#destination").val().trim();
    firstTrainTime = $("#first-train-time").val().trim();
    frequency = $("#frequency").val().trim();
    //add train to schedule
    addTrain();
    //clear all fields
    clearForm();
})

function addTrain() {
    //append a new row containing the form input to table
    var rowElement = $("<tr>");
    var nameCell = $("<td>").addClass("train-name").text(trainName);
    var destinationCell = $("<td>").text(destination);
    var frequencyCell = $("<td>").text(frequency);
    var deleteCell = $("<td>");
    var deleteIcon = $("<i>").addClass("fas fa-trash");
    deleteCell.append(deleteIcon);
    rowElement.append(nameCell).append(destinationCell).append(frequencyCell).append(deleteCell);
    $("tbody").append(rowElement);
}

function clearForm() {
    //if none of the form fields are empty
    if (trainName !== "" && destination !== "" && firstTrainTime !== "" && frequency !== "") {
        //clear values on form
        $("#train-name").val("");
        $("#destination").val("");
        $("#first-train-time").val("");
        $("#frequency").val("");
        //hide modal on submit
        $("#modal").modal("hide");
    }
}