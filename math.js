const myNumber = -5.654;
const output = Math.abs(myNumber);

console.log('absolute value =', output);
/* 
Math.celi use for next integer value
*/
const numb1 = 5.89748940;
const outPut = Math.ceil(numb1);
console.log('Next value =', outPut);
/* 
Math.floor use for previous integer value
*/
const numb2 = 5.89748940;
const outPut1 = Math.floor(numb2);
console.log('Next value =', outPut1);
/* 
Math.celi use for next or previous integer value
which depend on the floating value
if floating value is less than 0.5 then take previous integer
otherwise the next integer number
*/
const numb3 = 5.89748940;
const outPut2 = Math.round(numb3);
console.log('Next value =', outPut2);
/* 
Math.random is use for 0-1 value for random number 
which shows different value every time you run the code
ex: maybe first time 0.16488486
ex: maybe second time 0.2879712
like this :)
*/
const output3 = Math.random() * 10;
const output4 = Math.round(output3);
console.log(output4);