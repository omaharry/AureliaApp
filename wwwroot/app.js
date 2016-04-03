define(["require", "exports"], function (require, exports) {
    "use strict";
    var App = (function () {
        function App() {
            this.message = "";
        }
        App.prototype.activate = function () {
            this.message = "Hello from Aurelia!";
        };
        App.prototype.changeMessage = function () {
            this.message = "Goodbye!";
        };
        return App;
    }());
    exports.App = App;
});
