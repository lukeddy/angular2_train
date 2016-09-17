"use strict";
var Init = (function () {
    function Init() {
    }
    Init.prototype.load = function () {
        if (localStorage.getItem('todos') === null ||
            localStorage.getItem('todos') === undefined) {
            console.log('No todos found...creating ...');
            var todos = [
                {
                    "text": "Buy Some Orange"
                },
                {
                    "text": "Buy some Milk"
                },
                {
                    "text": "Buy some Juice"
                }
            ];
            localStorage.setItem('todos', JSON.stringify(todos));
        }
        else {
            console.log("Found Todos..");
        }
    };
    return Init;
}());
exports.Init = Init;
//# sourceMappingURL=init.todos.js.map