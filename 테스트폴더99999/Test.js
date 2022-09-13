

// console.dir는 DOM구조를 조회할때 유용!! (객체의 모습으로 출력!)
// 일단브라우저 콘솔창에서 사용할수 있는듯하다.
// 구문: console.dir(document.body) 일경우 children 으로 자식요소를볼수도있다.
// document.body.children로도 가능하다
// let newsContents = document.body.children[1] 변수를 선언하여도가능

//자바스크립트로 newsContents의 부모 요소를 가리키는 속성을 찾아보세요. 이 속성은 직접 검색을 통해 확인해 보기 바랍니다.
//Element.closest() => https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// 변수에담긴html요소.closest(찾을요소) => 태그,클래스,id요소구분?



// html(dom)은 script요소를만나면 HTML해석을 잠시 멈추고
// script요소를 먼저 실행함
// * html 문서는 하향식으로 읽는 문서다.


//head에 script를 삽입하는경우
// script 태그를 읽은후에 html을 읽게된다.
// 그렇다면 여기서 script에서 연결이되었는 dom요소들을 조작한다면 예기치 못한 오류가 발생할수도있다.
// 하지만 script가 먼저 실행이되도 문제가 되지않는 스크립트 파일이라면 문제가 없다???
// html파싱 = > html파싱중단후 script다운 , 실행 => html재파싱

//body끝 라인에 script를 삽입하는경우 -->
// 해당방법은 html을 읽고 script를 읽기때문에 dom을 먼저 그리게되고 script를 실행하게된다.
// 콘텐츠에 대해서는 head에 있는 script보다 빠르게 읽을수있다.
// 하지만 script를 통한 페이지이동을 해야하는경우라면 dom이 먼저그려저도 의미가없다.

//head 안의 async <script async src="스크립트파일"></script>
//https://jae04099.tistory.com/entry/HTML-script-%ED%83%9C%EA%B7%B8%EB%8A%94-%EC%96%B4%EB%94%94%EC%97%90-%EC%9C%84%EC%B9%98-%ED%95%B4%EC%95%BC-%ED%95%A0%EA%B9%8C




// let news = document.body.children[1]
// console.dir(news)
// console.log(news.closest("body"))

function consoleLogAllElement(element){
    // id가 nav인 요소에 접근
    let nav = document.getElementById("nav");
    // nav의 class 이름을 console.log 합니다.
    console.log("nav의 클래스?:",nav);
    // nav의 자식 엘리먼트가 있는지 검색합니다. (logo, menu-wrapper)
    console.log("nav의 자식들:",nav.children);
      //logo의 class 이름을 console.log 합니다.
      console.log("logo의 클래스이름 :",nav.children[0].className);
      //logo의 자식 엘리먼트가 있는지 검색합니다. (없음)
      console.log("logo의 자식들이 있는가?:",nav.children[0].children);



      //menu-wrapper의 class 이름을 console.log 합니다.
      console.log("menu-wrapper의 클래스이름:",nav.children[1].className);
      //menu-wrapper의 자식 엘리먼트가 있는지 검색합니다. (menu, menu, menu, profile-photo)
      console.log("menu-wrapper의 자식들:",nav.children[1].children)
        //첫 번째 menu의 class 이름을 console.log 합니다.
        console.log("첫번째menu의 클래스이름:",nav.children[1].children[0].className);
        //첫 번째 menu의 자식 엘리먼트가 있는지 검색합니다. (없음)
        console.log("첫번째menu의 자식:",nav.children[1].children[0].children);
        //두 번째 menu의 class 이름을 console.log 합니다.
        console.log("두번째menu의 클래스이름:",nav.children[1].children[1].className);
        //두 번째 menu의 자식 엘리먼트가 있는지 검색합니다. (없음)
        console.log("두번째menu의 자식:",nav.children[1].children[1].children);
        //세 번째 menu의 class 이름을 console.log 합니다.
        console.log("세번째menu의 클래스이름:",nav.children[1].children[2].className);
        //세 번째 menu의 자식 엘리먼트가 있는지 검색합니다. (없음)
        console.log("세번째menu의 자식:",nav.children[1].children[2].children);
        //profile-photo의 class 이름을 console.log 합니다.
        console.log("네번째menu의 자식:",nav.children[1].children[3].className);
        //profile-photo의 자식 엘리먼트가 있는지 검색합니다 (없음)
        console.log("네번째menu의 자식:",nav.children[1].children[3].children);
     //자식 엘리먼트를 모두 탐색했음으로, 함수 실행이 종료됩니다.
    //자식 엘리먼트를 모두 탐색했음으로, 함수 실행이 종료됩니다.
    }