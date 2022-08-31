
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

// // 버튼을 눌렀을 때 작동하는 함수입니다.
// buttons.addEventListener('click', function (event) {


//   /******************* target *******************/
//   // target : 버튼클릭이 발생한 HTML요소의 정보를 가져옴
//   // 예) <button class="number">7</button>
//   // 태그/클래스/내용 모두가 가져온다~
//   const target = event.target;
//   console.log("targer",target);

//   /******************* classList *******************/
//   // 클릭된(target변수의) 요소의 클래스리스트를 가져옴!
//   // 즉 숫자버튼은 number의 클래스! 기호버튼의 operator의 클래스!
//   // classList : 해당요소의 클래스를 가지고온다. 하지만 요소가하나여도
//   // [0]처럼 명시해줘야한다! 왜? 말그대로 리스트이기때문에 하나가있다해도
//   // 순서로 반환하기때문!
//   const action = target.classList[0]; // 클릭된 HTML 엘리먼트에 클레스 정보를 가져옵니다.
//   console.log("action",action);

//   /******************** textContent ********************/
//   // 클릭된 요소의 모든내용을(태그/클래스/아이디 제외) 문자열로 가지고온다.
//   // element.textContent : 해당요소의 모든내용을 가지고온다.(공백포함) *기본적인것만알자
//   // element.innerText : 해당요소의 내용을 가지고 온다.(불필요한 공백을 제외한다) *기본적인것만알자
//   // element.HTML : 해당요소의 css스타일의 속성까지 가지고온다! * 기본적인것만 알자
//   const buttonContent = target.textContent; // 클릭된 HTML 엘리먼트의 텍스트 정보를 가져옵니다.
//   console.log("버튼",buttonContent);

//   // ! 위 코드(Line 19 - 21)는 수정하지 마세요.


//   /******************** element.matches ********************/
//   // 클릭된 버튼요소 안에 클래스를 비교합니다.
//   // element.mqtches("확인할내용") :  HTML에 동일한 요소이지만 태그/클래스/아이디 등 선택자가다를때
//   // 선택자를이용하여 해당요소를 찾음! 
//   // 아래내용은 button의 모든 태그를 얘기한다.
//   if (target.matches('button')) {
    
//     // 클릭된 HTML 요소의 클래스가 "number"이면~ 아래if문을 실행
//     // 숫자버튼 if문
//     if (action === 'number') {

//       // 첫번째칸이 = 문자열 "0"일경우 아래 수행문을실행 
//       if(firstOperend.textContent === "0") {
//         // 첫번째 값 칸 = 클릭된버튼의 내용을 대입한다!
//         firstOperend.textContent = buttonContent;
        
        
//       } else{ /* 첫번째 칸이 문자열 "0"이 아닐경우 아래수행문을실행 */
//         // 세번째 값 칸 = 클릭된 버튼의 내용을 대입한다!
//         secondOperend.textContent = buttonContent;
//       }
    
      
//     } /****************** number if문 ******************/

//     // 클릭된 HTML 요소의 클래스가 "operator"이면~ 아래 수행문실행
//     // 기호버튼 if문
//     if (action === 'operator') {
      
//       // 클릭된 요소의 내용중 +가 있을경우
//       if(buttonContent === "+"){
//         //  두번째 칸 값에 +기호를 넣는다
//         operator.textContent = "+";
//       } 
//         // 클릭된 요소의 내용중 -가 있을경우
//         else if(buttonContent === "-"){
//           //  두번째 칸 값에 -기호를 넣는다
//         operator.textContent = "-";
//       } 
      
//         // 클릭된 요소의 내용중 *가 있을경우
//         else if(buttonContent === "*"){
//           //  두번째 칸 값에 *기호를 넣는다
//         operator.textContent = "*";
//       } 
      
//         // 클릭된 요소의 내용중 /가 있을경우
//         else if(buttonContent === "/"){
//           //  두번째 칸 값에 /기호를 넣는다
//         operator.textContent = "/";
//       }
//     }

//     if (action === 'decimal') {
//       // console.log('소수점 버튼');
      
//     }
//     // 클릭된 HTML 요소의 클래스가 "clear"이면 ~ 아래 수행문 실행
//     if (action === 'clear') {
//       // 첫번째 칸 숫자값 = "0"을 대입
//       firstOperend.textContent = "0";

//       // 두번째 칸 기호값 = "+"을 대입 => 기존값이 +임
//       operator.textContent = "+";

//       // 세번째 칸 숫자값 = "0"을 대입
//       secondOperend.textContent = "0";

//       // 결과값 = "0"을 대입
//       calculatedResult.textContent = "0";

//     }

//     // 클릭된 HTML 요소의 클래스가 "calculate"이면 ~ 아래 수행문 실행
//     if (action === 'calculate') {
  
//       //  결과값내용 = 연산함수(첫번째칸 숫자값, 두번째칸 기호값, 세번째칸 숫자값)을 인자로 전달
//       calculatedResult.textContent = calculate(firstOperend.textContent,operator.textContent,secondOperend.textContent);

//       // 함수에서 다시 전달받은 문자열 result값을 결과값으로 대입 

//     }
//   }
// });


// ! Advanced Challenge test와 Nightmare test를 위해서는 아래 주석을 해제하세요.

// 계산기의 디스플레이 화면!!
const display = document.querySelector('.calculator__display--for-advanced'); // calculator__display 엘리먼트와, 그 자식 엘리먼트의 정보를 모두 담고 있습니다.
// 각역할의 변수들 (첫번째 변수) , (기호 변수) , (???) , (이전값)
let firstNum, operatorForAdvanced, previousKey, previousNum;

// 버튼을 눌렀을 때 작동하는 함수
buttons.addEventListener('click', function (event) {
  // !! tip 왜 파라미터.target로 한번거른후에
  //  내용괴 클래스를 나눌까? 
  // 파라미터.classList[0], 파라미터.textContent 는안될까?
  // classList,textContent는 html의 요소를
  // 문자열로가져온다 그럼 "<button class="number">7</button>"이것의
  // 자체가 문자열일때 classList는 문자열로된요소에서 class를 찾지못하고 에러가 난다
  // 또한 textContent도 html요소안의 >텍스트정보(내용)<를 구분하지못하고 undefined가 된다
  // 하지만 target일경우는 ? 아래와 같이 태그/클래스(아이디)/내용을 구분한 상태로 가져오기 때문!!

  // 클릭된 HTML의 타입과 태그정보를 가지고옴
  // <button class="number">7</button>
  const target = event.target;
  console.log("target:",target);
  // @@@@@템플릿 리터럴의 다른 방향성 ?
  // => [object HTMLbuttonElement]로 출력이된다? 왜?
  // console.log(`target:${target}`);

  // 클릭된 요소의 HTMl 클래스정보를 가지고옴
  const action = target.classList[0];
  console.log(`action:${action}`);

  // 클릭된 요소의 HTML 요소의 텍스트정보를(내용) 가지고옴
  const buttonContent = target.textContent;
  console.log(`buttonContent:${buttonContent}`);
  // ! 위 코드는 수정하지 마세요.

  // ! 여기서부터 Advanced Challenge & Nightmare 과제룰 풀어주세요.


  // 클릭된 html의 요소중 태그가 button인지 ?
  if (target.matches('button')) {

    // 클릭된 html의 클래스요소가 "number"와 같은지?
    if (action === 'number') {
      

      // previousKey 가 "operator"의 클래스를 담고있는지? || 디스플레이의 내용이 0과 같은지? 
      if(previousKey === "operator" || display.textContent === "0") {
        // 조건이 true 일경우 :  클릭이 발생한 요소의 HTML내용을  디스플레이에 대입한다. 
        display.textContent = buttonContent;
      } else {
        // 조건이 false 일경우 : 클릭이 발생한 요소의 HTML내용을 디스플레이에 있는 값에 +한다.
        display.textContent += buttonContent;
      }

      // 중요한 부분!! 왜 previousKey를 number 클래스를 바꾸는지?
      // 첫번째 값을 7000을 누른후 연산기호를 누를경우 previousKey = "operator"의 값을
      // 가지게된다. 그후 숫자버튼을 다시누를시에 display.textContent 는 첫번째 숫자는 문제가없다
      // 왜냐하면 연산기호를 눌렀을시 previousKey가 operator의 값을 가지고 있기때문에
      // 첫번째 if문에 해당되므로 숫자버튼 클릭시 새로운 숫자가 대입된다!
      // 그후 다시 눌렀을시? 다음숫자버튼이 문자열로 + 가될까?
      // 불가능하다. 첫버튼이 눌린후에 display.textContent는 0 이상의 숫자가 눌려있을거고
      // previousKey는 "operator"의 클래스가 할당되어있기때문에! 첫번째 if문에서 계속 걸리게될것이다!
      // 그렇기때문에 첫번째 클릭시 해당되는 if문이 끝난후에 ~
      // previousKey에 "number"클래스를 재할당하여 다음클릭시에 else문으로 갈수도있도록 처리하는것이다!
      // 그렇게된다면 첫번째 if문에 조건에 해당되는게 없으므로 else문을 반복실행하게되어 display.textContent의 값에 +가된다.
      previousKey = "number";
    }


      
    if (action === 'operator') {
      // console.log('연산자 ' + buttonContent + ' 버튼');


      // 연산버튼이 눌렸을시 현재디스플레이의 내용을 firstNum에 담는다. 
      firstNum = display.textContent;
      console.log("이전값:",firstNum);

      //연산버튼이 눌렸을 함수에 넘겨줄수잇는 연산기호를 저장한다 !
      operatorForAdvanced = buttonContent;
      console.log("기호값:",operatorForAdvanced);

      // number 첫번째 if문조건에 해당되어 다음값이 대입될수있도록 하기위한 변수!
      previousKey = "operator";
      console.log("previousKey:",previousKey);
      

      
    }
    

    if (action === 'decimal') {
      console.log('소수점 버튼');
   
    }
    

    if (action === 'clear') {
      console.log('초기화 버튼');
      display.textContent = "0"; // 계산기에는 처음실행시에 0이있기때문
      firstNum = undefined; // 연산자 버튼이 눌리기전에는  값이없기때문!
      operatorForAdvanced = undefined; // 연산자 버튼이 눌리기전에는  값이없기때문!
      previousKey = undefined; // 사실상 초기화는 필요가없다~ 왜?
      //  어차피  연사버튼이 누르기전까지는 number 클래스를 가지고있고 연산버튼이 
      // 눌려야 operator이 대입이되기때문 number 클래스가 들어가있어도 
      //number if문은 첫번째 클릭이후 0도아니고 operator도 아니기때문에 dispaly.textCotent에 +값이 될것이기때문!

      // previousNum = undefined // 쓰지않은변수다??

      
  

    }

    if (action === 'calculate') {
      console.log('계산 버튼');

      display.textContent = calculate(firstNum,operatorForAdvanced,display.textContent);

    
    }
  }

});