const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 상위부모 !
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 첫번째칸 값!
const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 두번째 기호칸!
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 세번째칸 값!
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 결과값 칸!
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

function calculate(n1, operator, n2) {
  let result = 0;
  n1 = parseInt(n1);
  n2 = parseInt(n2);

  if(operator === "+"){
    result = n1 + n2;
  } else if(operator === "-"){
    result = n1 - n2;
  }  else if(operator === "*"){
    result = n1 * n2;
  }  else if(operator === "/"){
    result = n1 / n2;
  } 
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  return String(result);
}

// buttons.addEventListener('click', function (event) {
//   // 버튼을 눌렀을 때 작동하는 함수입니다.

//   // target 이벤트가 발생한 요소의 정보를 가져옴
//   const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//   console.log("targer",target);
//   // 클래스의요소를가져옴
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   console.log("action",action);

//   //타겟의 내용을가져옴
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   console.log("버튼",buttonContent);

//   // ! 위 코드(Line 19 - 21)는 수정하지 마세요.


//   // mqtches 태그/클래스/아이디 를 판별하는 함수!
//   if (target.matches('button')) {
//     // TODO : 계산기가 작동할 수 있도록 아래 코드를 수정하세요. 작성되어 있는 조건문과 console.log를 활용하시면 쉽게 문제를 풀 수 있습니다.
//     // 클릭된 HTML 엘리먼트가 button이면
//     if (action === 'number') {

//       if(firstOperend.textContent === "0") {
//         firstOperend.textContent = buttonContent;
//         // textContent 해당요소의 모든정보를가지고옴 (모든공백을가지고옴)
//         // innerText 해당요소의 불필요한 정보를 가지고옴 (불팔한 공백을 지우고옴)
//       } else{
//         secondOperend.textContent = buttonContent;
//       }
//       // 그리고 버튼의 클레스가 number이면
//       // 아래 코드가 작동됩니다.
//       console.log('숫자 ' + buttonContent + ' 버튼');
//     }

//     if (action === 'operator') {
      
//       console.log('연산자 ' + buttonContent + ' 버튼');
//       if(buttonContent === "+"){
//         operator.textContent = "+";
//       } else if(buttonContent === "-"){
//         operator.textContent = "-";
//       } else if(buttonContent === "*"){
//         operator.textContent = "*";
//       } else if(buttonContent === "/"){
//         operator.textContent = "/";
//       }
//     }

//     if (action === 'decimal') {
//       // console.log('소수점 버튼');
      
//     }

//     if (action === 'clear') {
//       console.log('초기화 버튼');
//       firstOperend.textContent = "0";
//       secondOperend.textContent = "0";
//       calculatedResult.textContent = "0";

//     }

//     if (action === 'calculate') {
//       console.log('계산 버튼');
      
//       calculatedResult.textContent = calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent);

//     }
//   }
// });


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

// 화면 변수
const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.


  // 타켓의 모든요소를 가지고옴
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  // 타겟의 클래스리스투중 0번째 리스트를 가지고옴
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  // 타켓의 내용을 가지고옴 ! 즉 문자열내용을 가지고옴
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.

  if (target.matches('button')) {
    if (action === 'number') {
      console.log('숫자 ' + buttonContent + ' 버튼');
      // // 주석 
      // if(operatorForAdvanced === "+" || display.textContent === "0" ){
      //   display.textContent = buttonContent;
      // } else if(display.textContent !== "0"){
      //   display.textContent += buttonContent;
      // } 
      //  처음에 0이 있을 때.
        if(display.textContent === "0" || previousKey === "operator") {
          display.textContent = buttonContent;
        } else {
          display.textContent = display.textContent + buttonContent;
        }
        previousKey = "number"
      
      //  임시보류 @@@@@@@@@@@@@@@@@
    //   for(let i = 0 ; 0 < buttonContent.length ; i++){
    //     display.textContent = buttonContent;
    //   }
    //   display.textContent += buttonContent;
    // }@@@@@@@@@@@@@@@@@@@@@@@@@@@
    }


      //here!!
    if (action === 'operator') {
      console.log('연산자 ' + buttonContent + ' 버튼');
        firstNum = display.textContent;
        operatorForAdvanced = buttonContent;
        previousKey = "operator";
      
        //  코드를 줄일수없는지확인!!!@@@@@@@@@@@@@@@@@@@@@
        // operatorForAdvanced = buttonContent;
        // console.log(operatorForAdvanced,"값이담긴기호");

        // previousKey = display.textContent;
        // console.log(previousKey,"디스플레이값")  
        

      
    }
    

    if (action === 'decimal') {
      console.log('소수점 버튼');
    }
    

    if (action === 'clear') {
      console.log('초기화 버튼');
      // display.textContent = 0;
      // operatorForAdvanced = "";
      // previousKey = "";

      // undefined 초기값으로 정해진다
      display.textContent = "0";
      firstNum = undefined;
      operatorForAdvanced = undefined;
      previousNum = undefined;
      previousKey = "clear";

    }

    if (action === 'calculate') {
      console.log('계산 버튼');

      previousNum = display.textContent
      display.textContent = calculate(firstNum.operatorForAdvanced, previousNum)
      // display.textContent = calculate(firstNum.operatorForAdvanced, display.textContent)
      previousKey = "calculate";
    }
  }

});