import {
    Medication
} from './medication.js';

const API_KEY = null;  // will add API key once it is provided

let medications = [];

// look to see if a medications list exists
if (localStorage.getItem("medications")) {
    console.log("local file found");
    medications = JSON.parse(localStorage.getItem("medications"));
    loadMedications();
}

// /* this is required when using module */
// window.addMed = addMed;

// /* add new task to list */
// function addMed() {
//     /* check to see if the task field is empty */
//     if (document.getElementById('medication').value == '') {
//         console.log("Can't save an empty medication!");
//         return;
//     }

//     if (API_KEY){
//         // call GoodRx for the API regarding the medication
//         console.log("Calling GoodRx for API data");
//     } else {
//         // use canned JSON text file for demo purposes

//     }
//     /* create new medication object */
//     const newMedication = new Medication(
//         // document.getElementById('completed').checked,
//         document.getElementById('medication').value,
//         document.getElementById('dosage').value,
//         document.getElementById('startDate').value,
//         document.getElementById('endDate').value,
//         document.getElementById('docFirstName').value,
//         document.getElementById('docLastName').value,
//         document.getElementById('docSpecialty').value,
//         document.getElementById('docAddress1').value,
//         document.getElementById('docAddress2').value,
//         document.getElementById('docCity').value,
//         document.getElementById('docState').value,
//         document.getElementById('docZip').value,
//         document.getElementById('docPhone').value,
//         document.getElementById('medUsage').value//,
//         // document.getElementById('medDescription').value
//     );

//     /* add new task to end of medications string */
//     medications.push(newMedication);

//     /* save to local storage */
//     saveMedications(medications);

//     /* fill table */
//     loadMedications();

//     /* clear form */
//     clearFields(); // should change this to go back to main page: finalProject.html
// }

// /* clear input fields */
// function clearFields() {
//     document.querySelector('#task').value = '';
// }

/* clears table before refreshing with updated data */
function clearMedications() {
    let table = document.querySelector('tbody');
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
}

/* delete task */
function deleteItem(medication) {
    let pos = medications.indexOf(medication);

    if (pos < 0) {
        return;
    }

    /* removes selected item from todo string */
    medications.splice(pos, 1);

    /* save to local storage */
    saveMedications(medications);

    /* fill table */
    loadMedications();
}


function loadMedications() {

    /* clear table for refresh */
    clearMedications();

    /* add each item to the table */
    medications.forEach(
        // (medication) => {
        //     document.querySelector('tbody').innerHTML +=
        //     `<tr>
        //         <td>${ medication.checked }</td>
        //         <td>${ medication.task }</td>
        //     </tr>`;
        // }
        (medication) => {
            // *** create table row ***
            let tr = document.createElement('tr');

            let tdMedName = document.createElement('td');
            let tdDosage = document.createElement('td');
            let tdDateStarted = document.createElement('td');
            
            // tdMedName.textContent = medication.medName;  // removed for edit
            tdDosage.textContent = medication.dosage;
            tdDateStarted.textContent = medication.startDate;

            let medEdit = document.createElement('a'); // added for edit
            medEdit.addEventListener('click', editMed.bind(null, medication), false); // added for edit
            medEdit.textContent = medication.medName; // added for edit

            // let aDelete = document.createElement('a');
            // aDelete.addEventListener('click', deleteItem.bind(null, medication), false);
            // aDelete.textContent = 'Delete';  // *** How did I replace this text with my image for a button? ***

            // tdEdit.appendChild(aDelete);
            tdMedName.appendChild(medEdit);

            tr.appendChild(tdMedName);
            tr.appendChild(tdDosage);
            tr.appendChild(tdDateStarted);

            document.querySelector('tbody').appendChild(tr);  
        }
    );
}

function saveMedications(medications) {
    localStorage.setItem('medications', JSON.stringify(medications));
}

function editMed(medication) {
    // add position as temp variable
    let pos = medications.indexOf(medication);
    localStorage.setItem("position", pos);
    // call details page
    window.location.href = "medDetails.html";
}