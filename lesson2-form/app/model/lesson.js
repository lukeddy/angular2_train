"use strict";
var studentlevel_1 = require("./studentlevel");
var Lesson = (function () {
    function Lesson(title, duration, description, _level) {
        if (title === void 0) { title = ""; }
        if (duration === void 0) { duration = 0; }
        if (description === void 0) { description = ""; }
        if (_level === void 0) { _level = studentlevel_1.StudentLevel.BEGINNER; }
        this.title = title;
        this.duration = duration;
        this.description = description;
        this._level = _level;
    }
    Object.defineProperty(Lesson.prototype, "level", {
        set: function (level) {
            console.log("setting lesson level...");
            this._level = studentlevel_1.StudentLevel[level];
        },
        enumerable: true,
        configurable: true
    });
    return Lesson;
}());
exports.Lesson = Lesson;
//# sourceMappingURL=lesson.js.map