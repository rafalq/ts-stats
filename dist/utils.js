"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringtoDate = void 0;
function dateStringtoDate(dateString) {
    const dateParts = dateString.split('/').map((val) => {
        return parseInt(val);
    });
    return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
}
exports.dateStringtoDate = dateStringtoDate;
