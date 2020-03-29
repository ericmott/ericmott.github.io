export class Medication {
    constructor(medName, dosage, startDate, endDate, docName, docSpecialty, 
        docAddress1, docAddress2, docCity, docState, docZip, docPhone, 
        medUsage, medDescription) {
        this.medName = medName,
        this.dosage = dosage,
        this.startDate = startDate,
        this.endDate = endDate,
        this.docName = docName,
        this.docSpecialty = docSpecialty,
        this.docAddress1 = docAddress1,
        this.docAddress2 = docAddress2,
        this.docCity = docCity,
        this.docState = docState,
        this.docZip = docZip,
        this.docPhone = docPhone,
        this.medUsage = medUsage,
        this.medDescription = medDescription
    };
}


// ***
// https://api.goodrx.com/drug-info
// ***