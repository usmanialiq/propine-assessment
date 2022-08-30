### Propine Assesment
author: email: usmanialiq@gmail.com


## To run the project
- create a .env file
- add the following variables:
CRYPTO_API_URL=https://min-api.cryptocompare.com/data/pricemulti <br />
CRYPTO_API_KEY={replace_with_your_key}

- download the extract the transactions.csv file into the root of the project
URL: https://s3-ap-southeast-1.amazonaws.com/static.propine.com/transactions.csv.zip 

- run command `yarn` to install the packages
- run comman `yarn start {arguments}` to run the project

- command line accepts the `arguments` -> `token` & `date`
- token can be `ETH`, `BTC` or `XRP`
- date should always be as `DD-MM-YYYY` -> 25-09-2019
- you can reverse the order of the `arguments`


Following are the examples:
`yarn start BTC` -> by token 
`yarn start 25-09-2019` -> by date 
`yarn start BTC 25-09-2019` -> by token & date 
`yarn start 25-09-2019 BTC` -> by date & token 
`yarn start` -> to return the latest 

## Project sturcture
The project is structured as,
- index.ts is the main file which will run
- interfaces folder contains the file for the interfaces used accross the project
- argsParser.ts makes sure to extract the correct info against any order else returns null
- dateParser.ts makes sure to convert the timestamp to date with format DD-MM-YYYY
- fetchRates.ts makes an API call to the CryptoCompare's system and fetches latest rates
- parseCSV.ts parses csv and loops through the data to return the result of matching portfolio
