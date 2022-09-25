// let a = [1,2,3].map((ele,idx)=>{
//   return ele * ele;
// })

// console.log(a);

// let b = [10,20,30];

// let c = b.forEach((ele)=>{
//   return ele * ele;
// })

// console.log(c);


// let Side1 = 24 * 24;
// // console.log(Side1);
// let Side2 = 7 ** 2;
// // console.log(Side2)
// let Side3 = Math.pow(25,2);
// // console.log(Side3)




// if(Side1 > Side2){
//   console.log("side1 > side2");
//   if(Side1 > Side3){
//     console.log("side1 > side3");
//     console.log(Side1 === Side2 + Side3);
//   }
// } else if(Side2 > Side3){
//   console.log("side2 > side3");
//     if(Side2 > Side1){
//       console.log("side2 > side1");
//       console.log(Side2 === Side1 + Side3);
//     }
// } else {
//   console.log("side3");
//     console.log(Side3 === Side1 + Side2);
// }

// function time (hour,minute,second){

//   let H = hour;// 23 시
//   let M = minute;// 59 분
//   let S = second;// 59 초
//   // 6시 59분 59초
  
//   if(59 === S){
//     S = 0;
//     M++;
//   } else if(60 === M){
//     M = 0;
//     H++;
//   } else if(23 === H){
//     H = 0;
//     M = 0;
//     S = 0;
//     return `1초 뒤에 ${H}시 ${M}분 ${S}초 입니다`
//   } else {
//     S++
//   }
  
//   return `1초 뒤에 ${H}시 ${M}분 ${S}초 입니다`
// }


// time(6,59,59);

console.log(Boolean(NaN));



