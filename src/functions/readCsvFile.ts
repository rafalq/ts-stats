import fs from 'fs';
import { dateStringtoDate } from '../utils';
import { MatchResult } from '../MatchResults';

export function readCsvFile(filename: string): string[][] {
  return fs
    .readFileSync(filename, {
      encoding: 'utf-8',
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    })
    .map((row: string[]): any => {
      return [
        dateStringtoDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
}
