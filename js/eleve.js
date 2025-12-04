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
        console.log("go");
        let notes=[];
        if(!subject){

            for (const subject in this.notes) {
                
                notes.concat(this.notes[subject]);

            }

            notes.forEach(notes => {
                
            });
            return true;
        }
        notes = this.notes[subject];
        notes.forEach(note => {
            sum+=note;
        });
        return sum/this.notes[subject].length;
    }
}