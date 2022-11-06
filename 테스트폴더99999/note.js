let tiling = function (n) {
    // TODO: 여기에 코드를 작성합니다.
    
    const result = [0, 1, 2];
  
  
    // result = [0,1,2,3]
    // result = [0,1,2,3,5]
  
    for (let i = 3; i <= n; i++) {
      result[i] = result[i-1] + result[i-2];
    //   console.log(result);
    }

    console.log(result);
    return result[n]
  
  };

//   output = tiling(4);
// console.log(output); // --> 5



let arr = [0, 1, 2, 3, 5];

function add(n){
    return n
}

let a = add(arr);

console.log(a);
  