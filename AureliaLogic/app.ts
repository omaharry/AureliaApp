/// <reference path="../typings/tsd.d.ts" />

import { AppRouter } from 'aurelia-router';

// export class App {
//     message: string;
 
//     constructor(router: any) {
//         this.message = "Hello from me!";
//     }
// } 

export class App {
    message: string;
    constructor() {
        this.message = "";
    }

    activate() {
        this.message = "Hello from Aurelia!";
    }

    changeMessage() {
        this.message = "Goodbye!";
    }

}