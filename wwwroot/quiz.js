define(["require", "exports"], function (require, exports) {
    "use strict";
    var sword = "sword";
    var band = "band";
    var Quiz = (function () {
        function Quiz() {
            this.quizUrl = "https://www.youtube.com/watch?v=RWzLN7DPNjs";
            this.questions = createNameChecks();
            this.percentageCorrect = 0;
            this.showScore = false;
        }
        Quiz.prototype.calculateScore = function () {
            var numberAnswered = 0;
            var numberCorrect = 0;
            this.questions.forEach(function (element) {
                if (element.answeredCorrectly != null) {
                    numberAnswered++;
                    numberCorrect = element.answeredCorrectly ? numberCorrect + 1 : numberCorrect;
                }
            });
            this.calculationAlert(numberAnswered, numberCorrect, this.questions.length);
        };
        Quiz.prototype.calculationAlert = function (numberAnswered, numberCorrect, totalQuestions) {
            if (numberAnswered != totalQuestions) {
                alert("Try to answer them all. It will be time well wasted!");
            }
            else {
                this.percentageCorrect = Math.round((numberCorrect / totalQuestions) * 100);
                this.showScore = true;
            }
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
        questions.push(new Question(new NameCheck("Heart Eater", sword), "Correct. belonged to the King everybody loved to hate, Joffrey Baratheon", "Nope."));
        questions.push(new Question(new NameCheck("Crimson Death", band), "Whoa. You've heard of them?", "Sorry. Peruvian metal band."));
        questions.push(new Question(new NameCheck("Dark Sister", sword), "Your GoT knowledge is scary awesome", "I believe you're thinking of Twisted Sister."));
        questions.push(new Question(new NameCheck("Savage Grace", band), "Well. Technically, they're prog rock. But Nice job!", "Sounds like a perfectly good name for a sword that George R.R. Martin did not plagarize."));
        questions.push(new Question(new NameCheck("Oathkeeper", sword), "Yep. Wielded by Brienne of Tarth: Lady, She-knight, Oathkeeper, Asskicker", "Sorry."));
        questions.push(new Question(new NameCheck("Lightbringer", sword), "Correct. The only thing more intimidating than a sword, is a sword on fire.", "A more proper metal band name would be Lightslayer."));
        return questions;
    }
});
