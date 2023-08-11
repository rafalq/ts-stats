"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { CsvFileReader } from './classes/CsvFileReader';
const readCsvFile_1 = require("./functions/readCsvFile");
const MatchResults_1 = require("./MatchResults");
// func
console.log('--- func ---');
const data = (0, readCsvFile_1.readCsvFile)('football.csv');
console.log(data);
let manUnitedWins = 0;
for (let match of data) {
    if (match[1] === 'Man United' && match[5] === MatchResults_1.MatchResult.HomeWin) {
        manUnitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === MatchResults_1.MatchResult.AwayWin) {
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
