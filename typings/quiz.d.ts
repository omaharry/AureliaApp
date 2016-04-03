/// <reference path="../typings/tsd.d.ts" />
export declare class Quiz {
    questions: Question[];
    numberCorrect: number;
    showScore: boolean;
    constructor();
    calculateScore(): void;
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
