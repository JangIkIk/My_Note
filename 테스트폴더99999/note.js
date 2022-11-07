

// const largestProductOfThree = function (arr) {
  
//   console.log("정렬전:",arr);

//   // 변수에 넘겨받은 파라미터를 슬라이트로 복사후
//   // sort로 정렬한다. 
//   const sorted = arr.slice().sort((a, b) => {
//   console.log("시작");
//   console.log(`a:${a}, - b:${b}`);
//   console.log(`a-b 의값?: ${a - b}`);
//   return a - b
//   });
  
//   console.log("정렬후:",sorted);
//   const len = arr.length;
//   const candi1 = sorted[len - 1] * sorted[len - 2] * sorted[len - 3];
//   const candi2 = sorted[len - 1] * sorted[0] * sorted[1];
//   return Math.max(candi1, candi2);
// };

// // let output = largestProductOfThree([2, 1, 3, 7]);
// // console.log(output);



// let output = largestProductOfThree([-1, 2, -5, 7]);
// console.log(output); // --> 35 (= -1 * -5 * 7)



var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  console.log(`a:${a}, b${b}`);
  
  return a - b;
});


console.log(numbers);