
// 최상위부모!
const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 상위부모 !
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 첫번째칸 값! [1]
const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 두번째칸 기호값! [2]
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 세번째칸 값! [3]
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 결과값 칸! [4]
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

  // 인자를 받아 기호에따라 연산하는 함수!!!
function calculate(n1, operator, n2) {

  // 계산된 값을 저장하는 result변수
  let result = 0;

  // 해당함수는 파라미터값이 모든것이 문자열로 들어온다
  //  왜? 해당계산기의 조건 + html의 요소를 textContent를불러오기떄문
  // 어떠한 값이든 html의 요소는 모든값이 문자열로 넘어온다!

  // parseInt : 해당값을 문파싱하여 정수 or NaN을 반환함
  // - 마주치는 모든값을 정수로 변환 , 소수전이올경우 .이하값을 잘라냄
  // - +, - 을 인식하여 부호를 제거하고 나머지문자열에 대하 숫자파싱을함
  n1 = parseInt(n1);
  n2 = parseInt(n2);

  // 파라미터값이 +일경우 플러스 연산을 진행
  if(operator === "+"){
    result = n1 + n2;
  } 
  // 파라미터값이 -일경우 플러스 연산을 진행
    else if(operator === "-"){
    result = n1 - n2;
  } 
  // 파라미터값이 *일경우 플러스 연산을 진행
    else if(operator === "*"){
    result = n1 * n2;
  } 
  // 파라미터값이 /일경우 플러스 연산을 진행
    else if(operator === "/"){
    result = n1 / n2;
  } 
  // 정수로 연산된 resutl의 값을 문자열로 반환!!
  return String(result);
}

// 버튼을 눌렀을 때 작동하는 함수입니다.
buttons.addEventListener('click', function (event) {


  /******************* target *******************/
  // target : 버튼클릭이 발생한 HTML요소의 정보를 가져옴
  // 예) <button class="number">7</button>
  // 태그/클래스/내용 모두가 가져온다~
  const target = event.target;
  console.log("targer",target);

  /******************* classList *******************/
  // 클릭된(target변수의) 요소의 클래스리스트를 가져옴!
  // 즉 숫자버튼은 number의 클래스! 기호버튼의 operator의 클래스!
  // classList : 해당요소의 클래스를 가지고온다. 하지만 요소가하나여도
  // [0]처럼 명시해줘야한다! 왜? 말그대로 리스트이기때문에 하나가있다해도
  // 순서로 반환하기때문!
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  console.log("action",action);

  /******************** textContent ********************/
  // 클릭된 요소의 모든내용을(태그/클래스/아이디 제외) 문자열로 가지고온다.
  // element.textContent : 해당요소의 모든내용을 가지고온다.(공백포함) *기본적인것만알자
  // element.innerText : 해당요소의 내용을 가지고 온다.(불필요한 공백을 제외한다) *기본적인것만알자
  // element.HTML : 해당요소의 css스타일의 속성까지 가지고온다! * 기본적인것만 알자
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  console.log("버튼",buttonContent);

  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.


  /******************** element.matches ********************/
  // 클릭된 버튼요소 안에 클래스를 비교합니다.
  // element.mqtches("확인할내용") :  HTML에 동일한 요소이지만 태그/클래스/아이디 등 선택자가다를때
  // 선택자를이용하여 해당요소를 찾음! 
  // 아래내용은 button의 모든 태그를 얘기한다.
  if (target.matches('button')) {
    
    // 클릭된 HTML 요소의 클래스가 "number"이면~ 아래if문을 실행
    // 숫자버튼 if문
    if (action === 'number') {

      // 첫번째칸이 = 문자열 "0"일경우 아래 수행문을실행 
      if(firstOperend.textContent === "0") {
        // 첫번째 값 칸 = 클릭된버튼의 내용을 대입한다!
        firstOperend.textContent = buttonContent;
        
        
      } else{ /* 첫번째 칸이 문자열 "0"이 아닐경우 아래수행문을실행 */
        // 세번째 값 칸 = 클릭된 버튼의 내용을 대입한다!
        secondOperend.textContent = buttonContent;
      }
    
      
    } /****************** number if문 ******************/

    // 클릭된 HTML 요소의 클래스가 "operator"이면~ 아래 수행문실행
    // 기호버튼 if문
    if (action === 'operator') {
      
      // 클릭된 요소의 내용중 +가 있을경우
      if(buttonContent === "+"){
        //  두번째 칸 값에 +기호를 넣는다
        operator.textContent = "+";
      } 
        // 클릭된 요소의 내용중 -가 있을경우
        else if(buttonContent === "-"){
          //  두번째 칸 값에 -기호를 넣는다
        operator.textContent = "-";
      } 
      
        // 클릭된 요소의 내용중 *가 있을경우
        else if(buttonContent === "*"){
          //  두번째 칸 값에 *기호를 넣는다
        operator.textContent = "*";
      } 
      
        // 클릭된 요소의 내용중 /가 있을경우
        else if(buttonContent === "/"){
          //  두번째 칸 값에 /기호를 넣는다
        operator.textContent = "/";
      }
    }

    if (action === 'decimal') {
      // console.log('소수점 버튼');
      
    }
    // 클릭된 HTML 요소의 클래스가 "clear"이면 ~ 아래 수행문 실행
    if (action === 'clear') {
      // 첫번째 칸 숫자값 = "0"을 대입
      firstOperend.textContent = "0";

      // 두번째 칸 기호값 = "+"을 대입 => 기존값이 +임
      operator.textContent = "+";

      // 세번째 칸 숫자값 = "0"을 대입
      secondOperend.textContent = "0";

      // 결과값 = "0"을 대입
      calculatedResult.textContent = "0";

    }

    // 클릭된 HTML 요소의 클래스가 "calculate"이면 ~ 아래 수행문 실행
    if (action === 'calculate') {
  
      //  결과값내용 = 연산함수(첫번째칸 숫자값, 두번째칸 기호값, 세번째칸 숫자값)을 인자로 전달
      calculatedResult.textContent = calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent);

      // 함수에서 다시 전달받은 문자열 result값을 결과값으로 대입 

    }
  }
});


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

// 화면 변수
// const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// let firstNum, operatorForAdvanced, previousKey, previousNum;

// buttons.addEventListener('click', function (event) {
//   // 버튼을 눌렀을 때 작동하는 함수입니다.


//   // 타켓의 모든요소를 가지고옴
//   const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
//   // 타겟의 클래스리스투중 0번째 리스트를 가지고옴
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   // 타켓의 내용을 가지고옴 ! 즉 문자열내용을 가지고옴
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   // ! 위 코드는 수정하지 마세요.

//   // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.

//   if (target.matches('button')) {
//     if (action === 'number') {
//       console.log('숫자 ' + buttonContent + ' 버튼');
//       // // 주석 
//       // if(operatorForAdvanced === "+" || display.textContent === "0" ){
//       //   display.textContent = buttonContent;
//       // } else if(display.textContent !== "0"){
//       //   display.textContent += buttonContent;
//       // } 
//       //  처음에 0이 있을 때.
//         if(display.textContent === "0" || previousKey === "operator") {
//           display.textContent = buttonContent;
//         } else {
//           display.textContent = display.textContent + buttonContent;
//         }
//         previousKey = "number"
      
//       //  임시보류 @@@@@@@@@@@@@@@@@
//     //   for(let i = 0 ; 0 < buttonContent.length ; i++){
//     //     display.textContent = buttonContent;
//     //   }
//     //   display.textContent += buttonContent;
//     // }@@@@@@@@@@@@@@@@@@@@@@@@@@@
//     }


//       //here!!
//     if (action === 'operator') {
//       console.log('연산자 ' + buttonContent + ' 버튼');
//       if(firstNum && operatorForAdvanced &&  previousKey !== "operator"){
//         display.textContent = calculate(firstNum, operatorForAdvanced, display.textContent);
//       }
//         firstNum = display.textContent;
//         operatorForAdvanced = buttonContent;
//         previousKey = "operator";
      
//         //  코드를 줄일수없는지확인!!!@@@@@@@@@@@@@@@@@@@@@
//         // operatorForAdvanced = buttonContent;
//         // console.log(operatorForAdvanced,"값이담긴기호");

//         // previousKey = display.textContent;
//         // console.log(previousKey,"디스플레이값")  
        

      
//     }
    

//     if (action === 'decimal') {
//       console.log('소수점 버튼');
//       // 점이 하나 이상 나오면 안됩니다.
//       // 점이 하나라도 있는 경우 -> 조건채히주면 되지 않을까?
//       //현재 화면애 떠있는 숫자에 "."이 포함되어 있지않고, 직전에 키가 operator가 아닐때
//       if(!display.textContent.includes(".") && previousKey !== "operator") {
//         display.textContent = display.textContent + ".";
//       } else if(previousKey === "operator"){// 현재 화면에 "."이 포함되어 있거나, 직전에 누른카가 operator일 때
//         display.textContent = "0.";
//       }
//       previousKey = "decimal"
//     }
    

//     if (action === 'clear') {
//       console.log('초기화 버튼');
//       // display.textContent = 0;
//       // operatorForAdvanced = "";
//       // previousKey = "";

//       // undefined 초기값으로 정해진다
//       display.textContent = "0";
//       firstNum = undefined;
//       operatorForAdvanced = undefined;
//       previousNum = undefined;
//       previousKey = "clear";

//     }

//     if (action === 'calculate') {
//       console.log('계산 버튼');
//       if(firstNum){

//         if(previousKey === "calculate") {
//           display.textContent = calculate(display.textContent, operatorForAdvanced, previousNum)
//         } else{
//           previousNum = display.textContent;
//           display.textContent = calculate(firstNum, operatorForAdvanced, previousNum)
//         }
//       }

//       previousNum = display.textContent
//       display.textContent = calculate(firstNum.operatorForAdvanced, previousNum)
//       // display.textContent = calculate(firstNum.operatorForAdvanced, display.textContent)
//       previousKey = "calculate";
//     }
//   }

// });