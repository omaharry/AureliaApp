/// <reference path="../typings/tsd.d.ts" />

import { AppRouter } from 'aurelia-router';

const sword = "sword";
const band = "band";

export class Quiz {
    public questions : Question[];
    public numberCorrect: number;
    public showScore : boolean;
    
    constructor() {
        this.questions = createNameChecks();
        this.numberCorrect = 0;
        this.showScore = false;
    }
    
    public calculateScore() {
        var numberCorrect = 0;
        this.questions.forEach(element => {
           if(element.answeredCorrectly == null) {
               alert("There is still pop-culture quizzing that needs your attention");
               return;
           } 
           else {
               numberCorrect++;
           }
        });
        
        this.numberCorrect = (numberCorrect/this.questions.length)*100;
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
    public checkedValue: string;
    public displayAlert: string;
    public questionLocked : boolean;
    public answeredCorrectly : boolean;
    
    constructor(nameCheck, correctAlert, incorrectAlert) {
        this.nameCheck = nameCheck;
        this.correctAlert = correctAlert;
        this.incorrectAlert = incorrectAlert;
        this.checkedValue = "";
        this.displayAlert = "";
        this.questionLocked = false;
        this.answeredCorrectly = null;
    }
    
    public checked() {
       if(this.checkedValue == this.nameCheck.context) {
           this.displayAlert = this.correctAlert;
           this.answeredCorrectly = true;
       }
           
       else {
           this.displayAlert = this.incorrectAlert;
           this.answeredCorrectly = false;
       }
           
       this.questionLocked = true;
    }
    
    get hasAlert(){
        return this.displayAlert.trim() != "";
    }

}

function createNameChecks() {
    var questions = [];
    questions.push(new Question(
        new NameCheck("Heart Eater", sword),
        "Correct. The sword belongs/ed to his Douchiness, Joeffrey Baratheon",
        "Nope."
    ));
    
    questions.push(new Question(
        new NameCheck("Crimson Death", band),
        "Whoa. You've heard of them?",
        "Sorry. If you were from Peru, you might know this."
    ));
    
    questions.push(new Question(
        new NameCheck("Dark Sister", sword),
        "Your GoT knowledge is scary awesome",
        "I believe you're thinking of Twisted Sister."
    ));
    
    return questions;
}