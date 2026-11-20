
document.addEventListener("DOMContentLoaded", function() {

    console.log("Medical Analysis Page Loaded");

    const patientData = JSON.parse(
        localStorage.getItem("carepilotPatient") || "null"
    );

    if (patientData) {

        console.log("Saved patient information available.");

    } else {

        console.log("No patient information available.");

    }

});
