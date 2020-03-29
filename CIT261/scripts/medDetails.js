import {
    Medication
} from './medication.js';

const API_KEY = null;  // will add API key once it is provided

let medications = [];
let pos = localStorage.getItem("position")

// look to see if a medications list exists
if (localStorage.getItem("medications")) {
    console.log("local file found");
    medications = JSON.parse(localStorage.getItem("medications"));
    loadMedication();
}

/* this is required when using module */
// window.addMed = addMed;
document.querySelector('#btn-saveItem').addEventListener('click', saveItem); // *** ERROR *** need to figure out
document.querySelector('#btn-projHome').addEventListener('click', projHome);
document.querySelector('#btn-deleteItem').addEventListener('click', deleteItem);

fillValues();

function saveItem() {
    console.log("in saveItem function");

    if (document.getElementById('medication').value == '') {
        console.log("Can't save an empty medication!");
        return;
    }

    /* assign modified values to the array */
    medications[pos].medName = document.getElementById("medication").value;
    medications[pos].dosage = document.getElementById("dosage").value;
    medications[pos].startDate = document.getElementById("startDate").value;
    medications[pos].endDate = document.getElementById("endDate").value;
    medications[pos].docName = document.getElementById("docName").value;
    medications[pos].docSpecialty = document.getElementById("docSpecialty").value;
    medications[pos].docAddress1 = document.getElementById("docAddress1").value;
    medications[pos].docAddress2 = document.getElementById("docAddress2").value;
    medications[pos].docCity = document.getElementById("docCity").value;
    medications[pos].docState = document.getElementById("docState").value;
    medications[pos].docZip = document.getElementById("docZip").value;
    medications[pos].docPhone = document.getElementById("docPhone").value;
    medications[pos].medUsage = document.getElementById("medUsage").value;

    saveMedications(medications);
    projHome();

}

function projHome() {
    window.location.href = "finalProject.html"; // returns back to project home
}

/* delete task */
function deleteItem() {
    console.log(pos);
    // let pos = medications.indexOf(medication);

    if (pos < 0) {
        return;
    }

    /* removes selected item from todo string */
    medications.splice(pos, 1);

    /* save to local storage */
    saveMedications(medications);

    /* return to the project homepage */
    projHome();
}

function loadMedication() {

    /* add each item to the table */
    medications.forEach(
        (medication) => {
            // *** create table row ***
            let tr = document.createElement('tr');

            let tdMedName = document.createElement('td');
            let tdDosage = document.createElement('td');
            let tdDateStarted = document.createElement('td');
            
            tdMedName.textContent = medication.medName;  // removed for edit
            tdDosage.textContent = medication.dosage;
            tdDateStarted.textContent = medication.startDate;

            // let medEdit = document.createElement('a'); // added for edit
            // medEdit.addEventListener('click', editMed.bind(null, medication), false); // added for edit
            // medEdit.textContent = medication.medName; // added for edit

            // tdMedName.appendChild(medEdit);

            tr.appendChild(tdMedName);
            tr.appendChild(tdDosage);
            tr.appendChild(tdDateStarted);

            // document.querySelector('tbody').appendChild(tr);  
        }
    );
}

function saveMedications(medications) {
    localStorage.setItem('medications', JSON.stringify(medications));
}

/* fill fields with current values */
function fillValues() {
    const superTest = medications[pos];
    console.log(superTest);
    document.getElementById("medication").value = medications[pos].medName;
    document.getElementById("dosage").value = medications[pos].dosage;
    document.getElementById("startDate").value = medications[pos].startDate;
    document.getElementById("endDate").value = medications[pos].endDate;
    document.getElementById("docName").value = medications[pos].docName;
    document.getElementById("docSpecialty").value = medications[pos].docSpecialty;
    document.getElementById("docAddress1").value = medications[pos].docAddress1;
    document.getElementById("docAddress2").value = medications[pos].docAddress2;
    document.getElementById("docCity").value = medications[pos].docCity;
    document.getElementById("docState").value = medications[pos].docState;
    document.getElementById("docZip").value = medications[pos].docZip;
    document.getElementById("docPhone").value = medications[pos].docPhone;
    document.getElementById("medUsage").value = medications[pos].medUsage;
}