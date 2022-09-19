// 외우지말고 이해해야한다.
// 잘설명할줄알아야한다.

//1. 얕은복사애 대해 설명하세요
/*
깊은복사와 얕은복사는
참조형 자료에대해서 같은 주소값을 참조할지 새로운주소를 생성할지 나눌수있습니다.

1-1. 얕은복사란?
- 얕은복사는 참조형 타입의 원본과 복사본이 같은 메모리 주소를 참조하는것을 말을하고(참조타입의 메모리 주소를 복사합니다.)

2-1. 깊은복사란? 
-인스턴스 변수까지 복사하여 같은주소가아닌 새로운 주소에 담기는것을말하며
- 참조값을 공유하지 않는복사를 말합니다.



- 객체안의 객체중 하나라도 원본이 객체를 참조하고있다면 이것은 얕은복사

1-2. 얕은복사의 문제점
- 같은 메모리의 주소를 참조하기 떄문에 해당 메모리 주소의 값이 변경되면  원본 및 복사본 에 대한 인스턴스 변수 값은 같이 변경됨

2-2. 깊은복사의 문제점
- 깊은복사의 경우 객체안의 객체가 있을떄 문제가 발생한다
- 깊은복사의 경우 depth가 존재한다.
- 새로운 메모리에 할당하기떄문에 메모리의 효율성이 떨어지고 가독성이 좋지않음


1-3 얕은복사하는방법
- =(이퀄)을 서용해 담겨있는값을 복사할수있음


-spread문법 또한 얕은복사
@@@@@@@@@@@@@@@@@2
객체안의 객체가있을경우는
Object.assign() 매서드도 얕은복사로취급


2-3. 객체및 배열의 깊은복사방법
Object.assign() => 객체에 대한복사
slice() => 배열에대한복사
concat() => 배열에 대한복사


@@ 변환 과정에서 모든 참조가 끊어지기때문에 깊은복사가 가능 단! 다른방법들에 느리다.
- JSON.parse(인수로 문자열을받아 객체로 치환)
- JSON.stringify(객체를 받아 문자열로 치환)



재귀함수

lodasg 라이브러리사용


2-4.객체안의 객체가 있을경우의 깊은복사
Object.assign(),spread  메서들로는 객체안의 객체를 복수할수가없다.



*/
//원시타입은 새로운메모리공간에 독립적인 값을저장!! 즉얕은복사가없다.
// 참조타입은 얕은복사의경우 주소값을 복사, 깊은복사의 경우는 해당객체의 값을복사







// 배열, 객체를 const로 선언했는데 요소나 속성을 추가할 수 있는 이유

//자바스크립트에서 function scope, block scope의 차이는?
// 자바스크립트에서 lexical scope와 dynamic scope의 차이는?
// var로 선언된 변수는 function scope, block scope중 어떤 scope를 가지는가?

// 생성자 : 인스턴스화를 했을떄 한번 호출이되며 정의를 할수있다 ?
// new 있어야 인스턴스화 => 메모리에 할당된, 실질적으로 사용할수있는


// HTML
// 일반적으로 CSS를 불러오기 위해 <link> 요소를 <head> 요소의 자식 요소로 하고, JavaScript를 불러오기 위해 <script> 요소를 <body> 요소가 끝나기 직전에 위치시키는 이유가 무엇인가요?
// <li> 요소는 왜 <ul> 요소의 자식 요소여야만 하나요?
// id 속성과 class 속성의 차이에 대해서 설명해주세요.
// CSS
// CSS box model에 대해서 설명해주세요.
// 간단한 로그인 폼 컴포넌트를 가운데 위치시키려면 CSS를 어떻게 작성해야 하나요? (centering)
// 간단한 블로그에서 아래와 같은 레이아웃을 구성하려면 CSS를 어떻게 작성해야 하나요?
// div.author-container
// +--------+------+------+
// |  글쓴이 | 빈칸  | 공유 |
// +--------+------+------+
// JavaScript
// 스코프에 대해서 설명해주세요.
// 배열, 객체를 const로 선언했는데 요소나 속성을 추가할 수 있는 이유에 대해서 설명해주세요.
// 원시 자료형과 참조 자료형에 대해서 설명해주세요.
// 얕은 복사와 깊은 복사에 대해서 설명해주세요.
// DOM
// innerHTML 메서드와 textContent 메서드의 차이에 대해서 설명해주세요.
// event.preventDefault 메서드는 언제, 왜 사용하는지 설명해주세요.



/************ 얕은복사개념 ***************************
얕은복사 : 원시자료형에대해서는 상관없으나 참조자료형같은 경우는
얕은 복사를 하게되면 같은 주소값을 참조하기떄문에 복사한 객체에대해서
값을 변경할경우 원본까지 같이 변경이되는 경우가 발생!

// 기본적인 객체의 복사는 얕은복사 obj1 = obj2

*****************************************************/

/************ 깊은복사 개념***************************
깊은복사 : 주소만 복사하는게 아니라 객체에 중첩된 객체까지 모두복사!
즉! 새로우 메모리에 할당되는것을 말함!
*************************************************/

/********** 오버라이드와, 오버라이딩 ***************
1. 오버라이드 부모와의 메서드명은같지만 내용물이틀리다.
2. 오버라이딩 부모와 타입틀리거나 인자,파라미터 개수가 틀리다.
**********************************************/

/*********  1차원 깊은복사********************

1. Object.assign(생성할객체,복사할객체) 메서드

2. spread 문법 => let obj = {...obj}
중요@@@@ => Object.assign() 과 spread 는 객체 안의 객체는 얕은 복사가 이루어져서

3. JSON의 메서드들
- JSON.parse(인수로 문자열을받아 객체로 치환)
- JSON.stringify(객체를 받아 문자열로 치환)

*********************************************/

/**********  2차원 깊은복사 ********************
1. 재귀함수를 이용 (쟈기자신을 부르는~)
문제되는 부분이없다. 어렵지만 이것을사용하도록!

2.JSON의 메서드들
- JSON.parse(인수로 문자열을받아 객체로 치환)
- JSON.stringify(객체를 받아 문자열로 치환)
// JSON은 객체안의 객체를 중첩상관없이 깊은복사가 가능

**  JSON의 메서드들의 또다른 문제점
만약 타입이 function 이면 또한 예상치 못한 오류가 발생!
1.함수자체는 담을수가 없다!! (ex.... add x 는불가 add() 는 가능)

2.만약 힘수를 호출하여 값을담는다고 했을떄
undefined 또한 담을수가 없다. 단! null은 가능 
JSON은 undefined 개념이 없기때문
null일경우는 빈객체를 반환!

3.객체 안의 함수를 작성할경우 또한 작동하지않는다? 다른함수에 대한 호출만가능하다?
그호출또한 return값이 있어야가능!!


*******************************************/

// 재귀함수를 이용한 깊은 복사하는방식!

// function PrintObject(obj) {
//     return JSON.stringify(obj)
// }

// function recursiveDeepcopy(obj){
//     let result = {};
//     for (let key in obj){
//         value = obj[key]
//         if(Array.isArray(value)){
//             result[key] = value.slice()
//             continue;
//         }

//         if (typeof value === "object"){
//             result[key] = recursiveDeepcopy(value);
//         } else {
//             result[key] = value
//         }
//     }

//     return result;
// }

// let obj = {
//     F:add(),
//     S(){
//         // console.log("string");
//         return 1;
//     },
//     string:"TEST",
//     number: 10,
//     boolean: true,
//     Object:{
//         d: 3,
//     },
//     Array: [1,2,3,4],
    
// };

// function add(){
//     // console.log("이것은 더하기함수")
//     return 1;
// }


// let a = JSON.parse(JSON.stringify(obj));
// // console.log(JSON.stringify(a));
// console.log(a.Array);
// // let a = recursiveDeepcopy(obj);
// // console.log(a.S());






