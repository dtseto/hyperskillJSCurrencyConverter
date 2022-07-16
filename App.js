//currency converter

//Write your code here
const input = require('sync-input');

//const prompt = require('prompt-sync')();

//constants
const USD = 1.0;
const JPY = 113.5;
const EUR = 0.89;
const RUB = 74.36;
const GBP = 0.75;

let multiplier = 1.0;

const currencyArray = [113.5, .89, 74.36, 1.0, .75]
const currencyNameArray = [JPY, EUR, RUB, USD, GBP]

let currencies = new Map ( [
    [ 'USD', 1.0 ],
    [ 'JPY', 113.5 ],
    [ 'EUR', 0.89 ],
    [ 'RUB', 74.36 ],
    [ 'GBP', 0.75 ]
] );

function conversion () {

    console.log('What do you want to convert?');
    //check from currency

      let fromCurrency = input ('From: ');
   do  {
      if (!currencies.has(fromCurrency.toUpperCase())){
      console.log ( 'Unknown currency' );
      let fromCurrency = input ('From: ');
        //return;
      }
   } while (!currencies.has(fromCurrency.toUpperCase()))
   
    let toCurrency = input ( 'To: ' );
    //check to currency

   do  {
      if (!currencies.has(toCurrency.toUpperCase())){
      console.log ( 'Unknown currency' );
      let toCurrency = input ('To: ');
        //return;
      }
   } while (!currencies.has(toCurrency.toUpperCase()))
   
    let amount = Number ( input ( 'Amount: ' ) );    
   do  {
      if (amount < 1){
      console.log ( 'The amount can not be less than 1' );
      let amount = Number ( input ( 'Amount: ' ) );
        //return;
      }
   } while (amount < 1)
   
   do  {
      if (isNaN(amount)){
      console.log ( 'The amount has to be a number' );
      let amount = Number ( input ( 'Amount: ' ) );
        //return;
      }
   } while (amount < 1)
    
    let result = convert ( amount, getRateFromUSD ( fromCurrency.toUpperCase () ), getRateToUSD ( toCurrency.toUpperCase () ) );

    console.log ( `Result: ${ amount } ${fromCurrency.toUpperCase()} equals ${ result.toFixed(4) } ${ toCurrency.toUpperCase () }` );
}



console.log('Welcome to Currency Converter!');
console.log(`1 USD equals  ${USD} USD`);
console.log(`1 USD equals  ${JPY} JPY`);
console.log(`1 USD equals  ${EUR} EUR`);
console.log(`1 USD equals  ${RUB} RUB`);
console.log(`1 USD equals  ${GBP} GBP`);

mainMenu();

function mainMenu(){
   console.log(`What do you want to do?`);
   let mainInput = input('1-Convert currencies 2-Exit program\n');
   
   do  {
      if (mainInput == 1){
      conversion();
      }
      else if (mainInput == 2){
      // break;
      // return 0;
      console.log('Have a nice day!');}
      else {
         console.log('Unknown input');
            let mainInput = input('1-Convert currencies 2-Exit program\n');

      }
   } while (mainInput != 1 && mainInput != 2)

}

//ugly way amount of currency, ratefrom currency to USD, rate from USD to other currency
function convert ( amount, rateFrom, rateTo ) {
    return amount * rateFrom * rateTo;
}


//convert from currency to USD
function getRateFromUSD (fromCurrency){
  if (fromCurrency.toUpperCase() == 'JPY') {
   multiplier = JPY;
}
else if (fromCurrency.toUpperCase() == 'EUR') {
   multiplier = EUR;
}
else if (fromCurrency.toUpperCase() == 'RUB') {
   multiplier = RUB;
}
else if (fromCurrency.toUpperCase() == 'GBP') {
   multiplier = GBP;
}
else if (fromCurrency.toUpperCase() == 'USD') {
   multiplier = USD;
}
   return 1/multiplier;
}

//convert currency to USD second step
function getRateToUSD (toCurrency){
  if (toCurrency.toUpperCase() == 'JPY') {
   multiplier = JPY;
}
else if (toCurrency.toUpperCase() == 'EUR') {
   multiplier = EUR;
}
else if (toCurrency.toUpperCase() == 'RUB') {
   multiplier = RUB;
}
else if (toCurrency.toUpperCase() == 'GBP') {
   multiplier = GBP;
}
else if (toCurrency.toUpperCase() == 'USD') {
   multiplier = USD;
}
   return multiplier;
}