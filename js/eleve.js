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
}