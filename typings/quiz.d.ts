/// <reference path="../typings/tsd.d.ts" />
export declare class Quiz {
    questions: Question[];
    constructor();
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
    constructor(nameCheck: any, correctAlert: any, incorrectAlert: any);
}
