import { dateFromTimestamp } from './dateParser';
import { IRates } from './interfaces/index';
import parser from 'csv-parser';
import fs from 'fs';
import { ICsvFile } from './interfaces';

interface IParams {
    token?: string;
    date?: string;
    rates: IRates;
}

export const parse_csv = (params?: IParams) => {
    let result = 0;
    console.log('rates ===>', params.rates);
    fs.createReadStream('./transactions.csv')
        .pipe(parser())
        .on('data', (data: ICsvFile) => {
            
            if (!params.token && !params.date) {
                result = data.amount * params.rates[data.token].USD;
                exitProcess(result, data);
            }

            if (params.token && params.date && (
                data.token === params.token && params.date === dateFromTimestamp(data.timestamp) 
            )) {
                result = data.amount * params.rates[params.token].USD;
                exitProcess(result, data);
            }

            if (!params.date && params.token && data.token === params.token) {
                result = data.amount * params.rates[params.token].USD;
                exitProcess(result, data);
            }

            if (!params.token && params.date && params.date === dateFromTimestamp(data.timestamp)) {
                result = data.amount * params.rates[data.token].USD;
                exitProcess(result, data);
            }

        })
        .on('end', () => {
            console.log('No records found with the given parameters ...');
        })
        .on('error', (error) => {
            console.log("🚀 ~ file: index.ts ~ line 14 ~ .on ~ error", error);
        });
}

const exitProcess = (result: number, data: ICsvFile) => {
    if (result) {
        console.log(`result ${data.token} of Amount ${data.amount} ===> USD$`, result);
        process.exit();
    }
}