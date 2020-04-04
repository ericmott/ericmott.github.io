import {
    Medication
} from './medication.js';

const API_KEY = null;  // will add API key once it is provided

let medications = [];

// look to see if a medications list exists
if (localStorage.getItem("medications")) {
    console.log("local file found");
    medications = JSON.parse(localStorage.getItem("medications"));
    // loadMedications();
}

/* this is required when using module */
// window.addMed = addMed;
document.querySelector('#btn-addItem').addEventListener('click', addMed);
document.querySelector('#btn-projHome').addEventListener('click', projHome);
document.querySelector('#btn-clearForm').addEventListener('click', clearForm);

/* add new task to list */
function addMed() {
    /* check to see if the task field is empty */
    if (document.getElementById('medication').value == '') {
        console.log("Can't save an empty medication!");
        return;
    }

    if (API_KEY){
        // call GoodRx for the API regarding the medication
        console.log("Calling GoodRx for API data");
    } else {
        // use canned JSON text file for demo purposes

    }
    /* create new medication object */
    const newMedication = new Medication(
        // document.getElementById('completed').checked,
        document.getElementById('medication').value,
        document.getElementById('dosage').value,
        document.getElementById('startDate').value,
        document.getElementById('endDate').value,
        document.getElementById('docName').value,
        document.getElementById('docSpecialty').value,
        document.getElementById('docAddress1').value,
        document.getElementById('docAddress2').value,
        document.getElementById('docCity').value,
        document.getElementById('docState').value,
        document.getElementById('docZip').value,
        document.getElementById('docPhone').value,
        document.getElementById('medUsage').value//,
        // document.getElementById('medDescription').value
    );

    /* add new task to end of medications string */
    medications.push(newMedication);

    /* save to local storage */
    saveMedications(medications);

    /* clear form */
    window.location.href = "finalProject.html";  // can us back button to return
    // window.location.replace("finalProject.html"); // cannot us back button to return
}

function projHome() {
    window.location.href = "finalProject.html"; // returns back to project home
}

function clearForm() {
    document.getElementById("form-newMed").reset();
}

/* delete task */
// function deleteItem(medication) {
//     let pos = medications.indexOf(medication);

//     if (pos < 0) {
//         return;
//     }

//     /* removes selected item from todo string */
//     medications.splice(pos, 1);

//     /* save to local storage */
//     saveMedications(medications);

//     /* fill table */
//     loadMedications();
// }


// function loadMedications() {

//     /* clear table for refresh */
//     clearMedications();

//     /* add each item to the table */
//     medications.forEach(
//         // (medication) => {
//         //     document.querySelector('tbody').innerHTML +=
//         //     `<tr>
//         //         <td>${ medication.checked }</td>
//         //         <td>${ medication.task }</td>
//         //     </tr>`;
//         // }
//         (medication) => {
//             // *** create table row ***
//             let tr = document.createElement('tr');

//             let tdMedName = document.createElement('td');
//             let tdDosage = document.createElement('td');
//             let tdDateStarted = document.createElement('td');
            
//             tdMedName.textContent = medication.medName;
//             tdDosage.textContent = medication.dosage;
//             tdDateStarted.textContent = medication.dateStarted;

//             let tdEdit = document.createElement('td');

//             // let aDelete = document.createElement('a');
//             // aDelete.addEventListener('click', deleteItem.bind(null, medication), false);
//             // aDelete.textContent = 'Delete';  // *** How did I replace this text with my image for a button? ***

//             // tdEdit.appendChild(aDelete);

//             tr.appendChild(tdMedName);
//             tr.appendChild(tdDosage);
//             tr.appendChild(tdDateStarted);

//             document.querySelector('tbody').appendChild(tr);  
//         }
//     );
// }

function saveMedications(medications) {
    localStorage.setItem('medications', JSON.stringify(medications));
}