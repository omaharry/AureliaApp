define(["require", "exports"], function (require, exports) {
    "use strict";
    var sword = "sword";
    var band = "band";
    var Quiz = (function () {
        function Quiz() {
            this.questions = createNameChecks();
            this.numberCorrect = 0;
            this.showScore = false;
        }
        Quiz.prototype.calculateScore = function () {
            var numberCorrect = 0;
            this.questions.forEach(function (element) {
                if (element.answeredCorrectly == null) {
                    alert("There is still pop-culture quizzing that needs your attention");
                    return;
                }
                else {
                    numberCorrect++;
                }
            });
            this.numberCorrect = (numberCorrect / this.questions.length) * 100;
        };
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
            this.checkedValue = "";
            this.displayAlert = "";
            this.questionLocked = false;
            this.answeredCorrectly = null;
        }
        Question.prototype.checked = function () {
            if (this.checkedValue == this.nameCheck.context) {
                this.displayAlert = this.correctAlert;
                this.answeredCorrectly = true;
            }
            else {
                this.displayAlert = this.incorrectAlert;
                this.answeredCorrectly = false;
            }
            this.questionLocked = true;
        };
        Object.defineProperty(Question.prototype, "hasAlert", {
            get: function () {
                return this.displayAlert.trim() != "";
            },
            enumerable: true,
            configurable: true
        });
        return Question;
    }());
    exports.Question = Question;
    function createNameChecks() {
        var questions = [];
        questions.push(new Question(new NameCheck("Heart Eater", sword), "Correct. The sword belongs/ed to his Douchiness, Joeffrey Baratheon", "Nope."));
        questions.push(new Question(new NameCheck("Crimson Death", band), "Whoa. You've heard of them?", "Sorry. If you were from Peru, you might know this."));
        questions.push(new Question(new NameCheck("Dark Sister", sword), "Your GoT knowledge is scary awesome", "I believe you're thinking of Twisted Sister."));
        return questions;
    }
});
