/**
 * Problem 2: Student Marks Analyzer
Function name: analyzeMarks(marksObj)
Statement:
 Return total marks, average marks, highest scoring subject, and lowest scoring subject.
Test case 1
Input: { math: 78, english: 65, physics: 88, bangla: 55 }

Output: { total: 286, average: 71.5, highest: "physics", lowest: "bangla" }

 */

// function analyzeMarks(marksObj) {
//   console.log(marksObj);
//   let total = 0;
//   let highestMarks = -Infinity;
//   let lowestMarks = Infinity;
//   for (let key in marksObj) {
//     total += marksObj[key];
// if (marksObj[key]> highestMarks){
//     highestMarks = marksObj[key];
//     highestSubject = key;
// }
// if (marksObj[key]< lowestMarks ){
//     lowestMarks = marksObj[key];
// lowestSubject = key

// }
//     // console.log(key, "->", marksObj[key]);
//   }
// //   console.log('highest--->', highestMarks)
// //   console.log('lowest--->', lowestMarks)
//   let avarage = total / Object.keys(marksObj).length;
//   // console.log( "Total -> " ,total);
//   // console.log( "Avarage-> " ,avarage);
//   return {
//     total,
//     avarage,
//     // highestMarks,
//      highestSubject,
//     // lowestMarks,
//     lowestSubject
//   };
// }
// let output = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
// console.log(output);

// function analyzeMarks(marksObj) {
//     total =0;
//     let highestmark = -Infinity;
//     let lowestmark = Infinity;
//   for (let subject in marksObj) {
//     let mark = marksObj[subject];
//     total += mark;

//     if (mark > highestmark){
//         highestmark = mark;
//         highestSubject = subject;
//     }
//     if (mark< lowestmark) {
//         lowestmark = mark;
//         lowestSubject = subject;

//     }
// }
// let avarage = total / Object.keys(marksObj).length
// return {
//     total,
//     avarage,
//     highestmark,
//     lowestmark,
//     highestSubject,
//     lowestSubject

// }
// }
// let output = analyzeMarks({ math: 78, english: 65, physics: 88, bangla: 55 });
// console.log(output);

/**
 * 
Test case 2
Input: { ict: 90, biology: 90, chemistry: 70 }
Output: { total: 250, average: 83.33, highest: "ict", lowest: "chemistry" }

 */
function analyzeMarks(marksObj) {
  total = 0;
highestmarks = -Infinity;
lowestmarks = Infinity;
  for (let subject in marksObj) {
    total += marksObj[subject];
    if (marksObj[subject] > highestmarks) {
        highestmarks = marksObj[subject];
        hightsubject = subject;
            }
            if (marksObj[subject]< lowestmarks) {
                lowestmarks = marksObj[subject];
                lowestsubject = subject;
                
            }
  }
  let avarage = total / Object.keys(marksObj).length;
  avarage =Number(avarage.toFixed(2));
  return {
    total,
    avarage,
    highestmarks,
    hightsubject,
    lowestmarks,
    lowestsubject
  };
}
let output = analyzeMarks({ ict: 90, biology: 90, chemistry: 70 });
console.log(output);
