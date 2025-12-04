class Eleve {
    constructor (nom, prenom, classe) {
        this.name=nom;
        this.firstname=prenom;
        this.course=classe;
        this.notes={
            maths: [], 
            algorithmique: [], 
            javascript: []
        };
    }
    average = (subject) => {
        if(subject == undefined){
            console.log("undefined");
        }
        let sum=0;
        let notes = this.notes[subject];
        notes.forEach(note => {
            sum+=note;
        });
        return sum/this.notes[subject].length;
    }
}