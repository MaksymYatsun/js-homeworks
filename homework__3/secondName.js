'use strict'

const str = 'Kevin, Steve, Jake, Bill, Paul, Susan, Ann'
const arr = str.split(', ');
const arrTmp = [];

for (let i = 0; i < arr.length; i += 2) {
  arrTmp.push(arr[i]);
}

const strEverySecond = arrTmp.join(', ');

console.log(strEverySecond);

/* 
Given a string of names: "Kevin, Steve, Jake, Bill, Paul, Susan, Ann". 
Create a new string that will contain every 2nd name from the first one: "Kevin, Jake, Paul, Ann".
*/