function ABCheck(str) {

if (str === undefined) {
  return false;
}

str = str.toLowerCase();
console.log("입력받은 문자열을 소문자로!:",str);

for (let i = 4; i < str.length; i++) {
  if ((str[i] === 'a' && str[i - 4] === 'b') || (str[i] === 'b' && str[i - 4] === 'a')) {
    console.log(i);
    console.log("입력받은 문자열의 i번째 순번의 값은 : ",str[i]);
    console.log("입력받은 문자열의 i-4번째 순번의 값은 :",str[i-4]);
    return true;
  }
}

return false;

}


let output = ABCheck('aMAJ7sBrO4CyysuoHFrgGTX');
console.log(output);