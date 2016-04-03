/// <reference path="../typings/tsd.d.ts" />

import { AppRouter } from 'aurelia-router';

const sword = "sword";
const band = "band";

export class Quiz {
    public questions : Question[];
    public percentageCorrect: number;
    public showScore : boolean;
    public quizUrl = "https://www.youtube.com/watch?v=RWzLN7DPNjs";
    constructor() {
        this.questions = createNameChecks();
        this.percentageCorrect = 0;
        this.showScore = false;
    }
    
    public calculateScore() {
        var numberAnswered = 0;
        var numberCorrect = 0;
        this.questions.forEach(element => {
           if(element.answeredCorrectly != null) {
              numberAnswered++;
              numberCorrect = element.answeredCorrectly ? numberCorrect+1 : numberCorrect;
           } 
        });
        
        this.calculationAlert(numberAnswered, numberCorrect, this.questions.length);
    }
    
    private calculationAlert(numberAnswered:number, numberCorrect:number, totalQuestions:number) {
        if(numberAnswered != totalQuestions) {
            alert("Try to answer them all. It will be time well wasted!");
        }
        else {
            this.percentageCorrect = Math.round((numberCorrect/totalQuestions)*100);
            this.showScore = true;
        }
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
        "Correct. belonged to the King everybody loved to hate, Joffrey Baratheon",
        "Nope."
    ));
    
    questions.push(new Question(
        new NameCheck("Crimson Death", band),
        "Whoa. You've heard of them?",
        "Sorry. Peruvian metal band."
    ));
    
    questions.push(new Question(
        new NameCheck("Dark Sister", sword),
        "Your GoT knowledge is scary awesome",
        "I believe you're thinking of Twisted Sister."
    ));
    
    questions.push(new Question(
        new NameCheck("Savage Grace", band),
        "Well. Technically, they're prog rock. But Nice job!",
        "Sounds like a perfectly good name for a sword that George R.R. Martin did not plagarize."
    ));
    
    questions.push(new Question(
        new NameCheck("Oathkeeper", sword),
        "Yep. Wielded by Brienne of Tarth: Lady, She-knight, Oathkeeper, Asskicker",
        "Sorry."
    ));
    
    questions.push(new Question(
        new NameCheck("Lightbringer", sword),
        "Correct. The only thing more intimidating than a sword, is a sword on fire.",
        "A more proper metal band name would be Lightslayer."
    ))
    return questions;
}