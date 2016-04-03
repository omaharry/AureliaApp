/// <reference path="../typings/tsd.d.ts" />

import { AppRouter } from 'aurelia-router';

export class Quiz {
    public questions : Question[];
    constructor() {
        this.questions = createNameChecks();
    }
}

export class NameCheck {
    public famousName : string;
    public context : string;
    
    constructor(famousName:string, context:string){
        this.famousName = famousName;
        this.context = context;
    }
}

export class Question {
    public nameCheck : NameCheck;
    public correctAlert: string;
    public incorrectAlert: string;
    
    constructor(nameCheck, correctAlert, incorrectAlert) {
        this.nameCheck = nameCheck;
        this.correctAlert = correctAlert;
        this.incorrectAlert = incorrectAlert;
    }
}

function createNameChecks() {
    var questions = [];
    questions.push(new Question(
        new NameCheck("Heart Eater", "sword"),
        "Corrcect. The sword belongs to Joeffrey Baratheon",
        "Nope."
    ))
    return questions;
}