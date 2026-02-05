/**
 * Problem 4: Shopping Bill Calculator
Function name: calcBill(prices, items)
Statement:  Calculate total bill amount and count how many times each item appears.
Test case 1
Input: 
   t: 
     prices = { rice: 70, oil: 180, egg: 12, sugar: 90 };
     items = ["egg", "egg", "rice", "oil", "egg", "sugar"];

Output:
{
  total: 352,
  itemCount: { egg: 3, rice: 1, oil: 1, sugar: 1 }
}

 */
// function calcBill(prices, items){

// // console.log(prices,items)
//  let total = 0;
// for (let item in prices){
//     let price = prices[item];
//     // console.log( item, "->",price)
//     total += price;
//     }

// // console.log( "Total:",total);
// let itemCount ={};
// for (let item of items){
//     // console.log(item);
//     if (itemCount.hasOwnProperty(item)) {
//        itemCount[item]++;
//     }
//     else{
//         itemCount [item]= 1;
//     }
// }
// // console.log(itemCount);
// return{
//     total,
//     itemCount ,
// };

// }
// let output = calcBill({ rice: 70, oil: 180, egg: 12, sugar: 90 }, ["egg", "egg", "rice", "oil", "egg", "sugar"]);
// console.log(output);

/**
 * Test case 2
Input:
prices = { pen: 10, book: 50 };
items = ["pen", "pen", "book", "pen"];

Output:
{
  total: 80,
  itemCount: { pen: 3, book: 1 }
}

 */

function calcBill(prices, items) {
  let total = 0;
  let itemCount = {};
  for (let item of prices) {
    let price = prices[item];
    total += price;
  }
  let itemCount = {};
  for (let item of items) {
    if (items.hasOwnProperty(item)) {
   itemCount[item]++; }
   else {
    itemCount[item] = 1;
   }
  }
  return {
    total,
    itemCount
  };
}
let output = calcBill({ pen: 10, book: 50 }, ["pen", "pen", "book", "pen"]);
console.log(output);
