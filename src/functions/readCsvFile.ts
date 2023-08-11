import fs from 'fs';

export function readCsvFile(filename: string): string[][] {
  return fs
    .readFileSync(filename, {
      encoding: 'utf-8',
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',');
    });
}
