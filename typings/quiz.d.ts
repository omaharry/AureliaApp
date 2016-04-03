/// <reference path="../typings/tsd.d.ts" />
export declare class Quiz {
    questions: Question[];
    percentageCorrect: number;
    showScore: boolean;
    quizUrl: string;
    constructor();
    calculateScore(): void;
    private calculationAlert(numberAnswered, numberCorrect, totalQuestions);
}
export declare class NameCheck {
    famousName: string;
    context: string;
    constructor(famousName: string, context: string);
}
export declare class Question {
    nameCheck: NameCheck;
    correctAlert: string;
    incorrectAlert: string;
    checkedValue: string;
    displayAlert: string;
    questionLocked: boolean;
    answeredCorrectly: boolean;
    constructor(nameCheck: any, correctAlert: any, incorrectAlert: any);
    checked(): void;
    hasAlert: boolean;
}
