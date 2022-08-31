const calculator = document.querySelector('.calculator'); // calculator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const buttons = calculator.querySelector('.calculator__buttons'); // calculator__keys 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.

const firstOperend = document.querySelector('.calculator__operend--left'); // calculator__operend--left 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const operator = document.querySelector('.calculator__operator'); // calculator__operator 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const secondOperend = document.querySelector('.calculator__operend--right'); // calculator__operend--right 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
const calculatedResult = document.querySelector('.calculator__result'); // calculator__result 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.



function calculate(n1, operator, n2) {
  let result = 0;
  // TODO : n1과 n2를 operator에 따라 계산하는 함수를 만드세요.
  // ex) 입력값이 n1 : '1', operator : '+', n2 : '2' 인 경우, 3이 리턴됩니다.
  // let n1 = Number;
  // let n2 = Number;

  n1 = Number(n1);
  n2 = Number(n2);
  
  if(operator === "+"){
    result = n1 + n2;
  } else if(operator === "-") {
    result = n1 - n2;
  } else if(operator === "*") {
    result = n1 * n2;
  } else if(operator === "/") {
    result = n1 / n2;
  }
  return String(result);
}


// [1]. calculator_buttons(부모) 안에 있는 자식들을  불러온후
// click이벤트를 적용!! 대상은? 해당부모 아래의 모든 자식,자손이대상
//  onclick 도가능 적용방식이다를뿐 ~ 즉 ! onclick = addEventListener 차이
buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.
 


  // [2]. 클릭이벤트가 발생한 자식(자손)의 전체 정보를 .target 으로가져온후 target변수에대입
  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  console.log(`타켓값=>${target}`);

  // [3]. 이벤트가 발생한 타켓의 클래스리트를 가져옴! 
  // 여기서 인덱스가 0인이유는 ? 현재 button태그의 클래스는? 하나만존재한다
  // 하나만 존재한다고 인덱스번호를 기재안할경우 undefind가 된다! 말그대로 리스트다
  // 리스트중 몇번째 기재를 해야한다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  console.log(`액션값=>${action}`)

  //  [4]. 클릭된요소의 내용을 가져온다!
  //  비슷하게 사용이되는 innerText도 있다
  //  둘의 차이는? textContent는 공백포함 있는그대로 출력을한다
  //  그와 반대로 innerText는 불필요한 공간들은 빼고 간추려 출력한다!
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드(Line 19 - 21)는 수정하지 마세요.


  // [5]. 위에서 target은 이벤트가 발생한 자식(자손)의 정보를 담고있다.
  // 그 자식(자손)이 button태그가 맞는지 확인을한다
  // element.matches(`selector`) = true/false /
  // class, id는 다르지만 button태그가 같은 요소를 찾게도와주는 함수다!
  // 반대로 태그는 다르지만 돌일한 class, id 의 요소를 찾을수도있다.
  // 아래와 같이 button태그를 사용한이유는? html태그중 연산자버튼태그는 클래스가 다르기때문
  if (target.matches('button')) {
    
    // [6]. 위에서 액션변수에는 클릭이벤트가발생한 요소의 클래스 정보를 담고있다
    // 그클래스가 number인지를 비교한다
    if (action === 'number') {
      // 그리고 버튼의 클레스가 number이면
      // 아래 코드가 작동됩니다.
      console.log('숫자 ' + buttonContent + ' 버튼');

      // [7]. 첫번째칸(firstOperend) 의 내용이 0인지를비교!!
      // 0일경우 첫번째칸의 내용은 = 이벤트발생요소의 내용을가져온다!
      if(firstOperend.textContent === "0"){
        firstOperend.textContent = buttonContent;
      } 

      // [8]. 첫번째칸의(firstOperend) 의 내용이 0이아닐경우!!
        // 0이아닐경우는 즉 다른숫자가 있을경우!
        // 두번째칸의 내용으로 입력됨!
      else if(firstOperend.textContent !== "0") {
        secondOperend.textContent = buttonContent;
      }



    }
    // [9]. 클래스가 operator 일경우
    // 연산기호에 맞게 기호값이 설정됨
    if (action === 'operator') {
      operator.textContent = buttonContent;
      console.log('연산자 ' + buttonContent + ' 버튼');
    }

    // [10].
    if (action === 'decimal') {
      // console.log('소수점 버튼');
    }


    //[11].클래스가 calear일경우 모든값을 0으로 대입!
    if (action === 'clear') {
      firstOperend.textContent = "0";
      secondOperend.textContent = "0";
      calculatedResult.textContent = "0";
      // console.log('초기화 버튼');

      }


    }
    // [12]. 클래스가 calculate 일경우
    // 첫번째값, 두번째값, 기호값을 가지고있는 전역변수를 선언!
    // 결과값을 담는 변수또한함수를 호출하여 접근하여 calculate값ㅇ
    if (action === 'calculate') {
      console.log('계산 버튼');
      // let n1 = ;
      // let n2 = ;
      // let operate = ;
      calculatedResult.textContent = 
      calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent)
    }
  }
);


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
let firstNum, operatorForAdvanced, previousKey, previousNum;

buttons.addEventListener('click', function (event) {
  // 버튼을 눌렀을 때 작동하는 함수입니다.

  const target = event.target; // 클릭된 HTML 엘리먼트의 정보가 저장되어 있습니다.
  const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
  const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.
  if (target.matches('button')) {
    if (action === 'number') {}
    if (action === 'operator') {}
    if (action === 'decimal') {}
    if (action === 'clear') {}
    if (action === 'calculate') {}
  }

});
