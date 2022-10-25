function reverseArr(arr) {
    // TODO: 여기에 코드를 작성합니다.
  
      if(arr.length === 0){
        return []
      }


    // console.log(`${arr.slice(1)}.concat(arr[${arr[0]}]) = ${arr.slice(1).concat(arr[0])}`)
    const result = reverseArr(arr.slice(1)).concat(arr[0]);
    console.log(result);
    return result;
  
  }

  let output = reverseArr([1, 2, 3]);
console.log(output); // --> [3, 2, 1]
  


// const print = console.log;

// function fibonacci(n, v, depth=0) {
//   let msg = '';

//   if (depth == 0) {
//     print(`[${v}] n: ${n}`)
//   } else {
//     let d = ' '.repeat(depth * 2);
//     if (v == 'L') {
//       msg = `${n + 1} - 1`;
//     } else {
//       msg = `${n + 2} - 2`;
//     }

//     print(`${d}[${v}] ${msg} (${n})`)
//   }

//   if ( n <= 1 ) {
//     return n;
//   }

//   depth++;
//   return fibonacci(n-1, 'L', depth) + fibonacci(n-2, 'R', depth);
// }

// fibonacci(3, 'Root');

/*

3

3 - 1 = 2;

2 - 1 = 1; return 







6. 
*/