"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.readCsvFile = void 0;
const fs_1 = __importDefault(require("fs"));
function readCsvFile(filename) {
    return fs_1.default
        .readFileSync(filename, {
        encoding: 'utf-8',
    })
        .split('\n')
        .map((row) => {
        return row.split(',');
    });
}
exports.readCsvFile = readCsvFile;
