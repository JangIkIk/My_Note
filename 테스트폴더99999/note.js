// // const { StrictMode } = require("react");

// function convertDoubleSpaceToSingle(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   // let STR = [...str]
//   // console.log(STR)

//   // for(let i = 0 ; i < STR.length; i++){
//   //   if(STR.length[i] === STR.lengtj[i+1]){
//   //     StrictMode.replace(" ");
      
//   //    }
//   // }
//   // let result = str.replace("  "," ",2);
// // 
//   // return result;

//   // return str.split("  ");
  

//   return str.split("  ").join(" ");
  
// }

function convertDoubleSpaceToSingle(str) {
  let result = '';
  let before = '';
  for (let i = 0; i < str.length; i++) {
  
    if (before !== ' ' || str[i] !== ' ') {
      result = result + str[i];
      console.log("result",str[i]);
    }
    
    before = str[i];
    console.log("before",before)
  }
  return result;
}



let output = convertDoubleSpaceToSingle('string  with  double');
console.log(output); // --> "string with double spaces