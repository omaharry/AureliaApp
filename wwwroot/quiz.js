define(["require", "exports"], function (require, exports) {
    "use strict";
    var Quiz = (function () {
        function Quiz() {
            this.questions = createNameChecks();
        }
        return Quiz;
    }());
    exports.Quiz = Quiz;
    var NameCheck = (function () {
        function NameCheck(famousName, context) {
            this.famousName = famousName;
            this.context = context;
        }
        return NameCheck;
    }());
    exports.NameCheck = NameCheck;
    var Question = (function () {
        function Question(nameCheck, correctAlert, incorrectAlert) {
            this.nameCheck = nameCheck;
            this.correctAlert = correctAlert;
            this.incorrectAlert = incorrectAlert;
        }
        return Question;
    }());
    exports.Question = Question;
    function createNameChecks() {
        var questions = [];
        questions.push(new Question(new NameCheck("Heart Eater", "sword"), "Corrcect. The sword belongs to Joeffrey Baratheon", "Nope."));
        return questions;
    }
});
