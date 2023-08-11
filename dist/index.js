"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readCsvFile_1 = require("./functions/readCsvFile");
var MatchResult;
(function (MatchResult) {
    MatchResult["HomeWin"] = "H";
    MatchResult["AwayWin"] = "A";
    MatchResult["Draw"] = "D";
})(MatchResult || (MatchResult = {}));
// func
console.log('--- func ---');
const data = (0, readCsvFile_1.readCsvFile)('football.csv');
let manUnitedWins = 0;
for (let match of data) {
    if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
// class
// console.log('--- class ---');
// const reader = new CsvFileReader('football.csv');
// reader.read();
// let manUnitedWins = 0;
// for (let match of reader.data) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }
// console.log(`Man United won ${manUnitedWins} games`);
