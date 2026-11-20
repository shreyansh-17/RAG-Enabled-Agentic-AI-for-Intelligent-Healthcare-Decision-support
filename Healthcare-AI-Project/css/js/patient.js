
const patientForm = document.getElementById("patientForm");

if (patientForm) {

    // Previously saved patient load karna
    const savedPatient = JSON.parse(
        localStorage.getItem("carepilotPatient") || "null"
    );

    function showPatient(patient) {

        const preview = document.getElementById("patientPreview");

        preview.innerHTML = `
            <h3>${escapeText(patient.name)}</h3>
            <p>Patient ID: ${escapeText(patient.patientId || "N/A")}</p>
            <p>Age: ${escapeText(patient.age || "N/A")}</p>
            <p>Gender: ${escapeText(patient.gender || "N/A")}</p>
            <p>Blood Group: ${escapeText(patient.blood || "N/A")}</p>
            <p>Symptoms: ${escapeText(patient.symptoms || "N/A")}</p>
            <p>Medical History: ${escapeText(patient.history || "N/A")}</p>
        `;

    }

    function escapeText(value) {
        return String(value).replace(/[&<>"']/g, function(char) {
            return {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;"
            }[char];
        });
    }

    if (savedPatient) {
        showPatient(savedPatient);
    }

    // Patient form submit
    patientForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const patient = {

            name: document.getElementById("name").value,
            patientId: document.getElementById("patientId").value,
            age: document.getElementById("age").value,
            gender: document.getElementById("gender").value,
            blood: document.getElementById("blood").value,
            phone: document.getElementById("phone").value,
            symptoms: document.getElementById("symptoms").value,
            history: document.getElementById("history").value

        };

        localStorage.setItem(
            "carepilotPatient",
            JSON.stringify(patient)
        );

        showPatient(patient);

        alert("Patient details saved successfully!");

    });

}
