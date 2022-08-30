import { fetchExchangeRates } from './fetchRates';
import { parse_csv } from './parseCsv';

import { IRates } from './interfaces';
import { argsParser } from './argsParser';



const { token, date } = argsParser(process.argv.slice(2));
console.log("🚀 ~ file: index.ts ~ line 10 ~ token, date", token, date)

/* 
    1. execute the async function fetchExchangeRates and retrieve rates
    2. parse the csv file 
*/
fetchExchangeRates()
    .then((rates: IRates) => {
        parse_csv({ token, date, rates });
    });
