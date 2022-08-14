// CGV 메인페이지 JS - main.js/////////////


// 로딩구역 ////////////////////////////////////
//  이벤트 : load, DOMContentLoaded

window.addEventListener("DOMContentLoaded",()=>{

    // 호출확인
    console.log("로딩완료!");

    ///////////////////////////////////////////////////
    ///포스터 메뉴 클릭시 예고편 변경 및 클래스 on 주기///
    ///////////////////////////////////////////////////

    //영화정보 셋팅하기
    const minfo = [
      // 닥터스트레인지
      "mI9oyFMUlfg",
      // 쥬라기
      "sotCKQl2iQY",
      //브로커
      "DpVAb7Bi5UQ",
      // 범죄도시2
      "aw9j_23nORs",
      // 몬스터싱어
      "wXWiVmTEzkA",
      // 스파이더맨
      "W7edvITC9g4"];////////////////////////////////////

    //  대상선정(포스터메뉴 a링크) : .mlist a
    const mlist = document.querySelectorAll(".mlist a");
    // console.log(mlist);
    
    //  대상선정(포스터메뉴 최상위 li만):
    const mli = document.querySelectorAll(".mlist>ul>li");

    // 대상 컬렉션의 개수만큼 돌면서 예고편 변경함수(멍멍함수)호출
    mlist.forEach((ele,idx)=>{ // ele-요소, idx-순번
        // console.log(minfo[idx]);
        //각요소에 click이벤트 설정!


        ele.onclick = ()=>{
            // console.log(minfo[idx]);

            // 1.멍멍함수 호출! -> 예고편 변경
            멍멍(minfo[idx]);

            // 2.모든 li요소에 클릭으로 들어간  class 해제하기(일괄제거)
            mli.forEach((eli)=>{eli.classList.remove("on")});
            // eli는 각 최상위 li임!



          // 3.클릭된 요소의 부모(li) 클래스 on넣기
          ele.parentElement.classList.add("on");

          //ele.parentElement -> a자신의 부묘요소로 이동
            // console.log(ele.parentElement);

        };/////////////click////////////////
    });/////////forEach////////////////



    /////////////////////////////////////
    //극장가는길 클릭시 구글맵 보이기//////
    /////////////////////////////////////
    // 이벤트 대상: .goMV
    let goMV = document.querySelector(".goMV");
    // 이벤트 대상: .cbtn
    let cbtn = document.querySelector(".cbtn");
    // 변경대상 : .gmap
    let gmap = document.querySelector(".gmap");


    // 변경방법: goMV 클릭시 gmap에 클래스"on"넣기 뺴기
    // 사용 메서드 : classList.toggle()
    goMV.onclick = ()=>{
        //  구글맵박스에 on넣기
        gmap.classList.add("on");
        // 자기자신(this===goMV)에 on 넣기
        goMV.classList.add("on");

    };////////////////////////click////////////////////////////
    /////////////////////////////////////////////////////////

    //닫기버튼cbtn 클릭시 gmap에 클래스 "on" 빼기
    cbtn.onclick = () => {
      // 구글맵박스에 on뺴기
      gmap.classList.remove("on");
      // goMV에 on 뺴기
      goMV.classList.remove("on");

    }
}); //////////////////////////////로드구역////////////////////////////
/////////////////////////////////////////////////////////////////////

/************************
      함수명 : 멍멍
      기능: 포스터메뉴 클릭시 유튜브 iframe
          src속성값 변경하여 영화 바꾸기!
 ****************************/
function 멍멍(먹이) { // 먹이 - 전달값을 담는 변수
  // 먹이 - 전달값을 담는 변수
  // -> 먹이 변수에 영화 고유코드를 담는다!  


  //  1. 호출 및 전달값 확인!
  console.log("먹이줘", 먹이);

  //2. 변경대상 : 아이프레임 -> #screen iframe

  var 아이 = document.querySelector('#screen iframe');

  // 3. 변경내용 : 아이프레임의 SRC 속성값 변경하기!
  아이.src =
    "https://www.youtube.com/embed/" + 먹이 + "?autoplay=1";

  //전달변수 먹이에  담긴 값을 다른 문자값과
  //  합쳐서 하나의 문자로 만들어 준다!
  // +는 문자를 합치는 연산자!

  // 이퀄(=)을 만나는 순간
  // 이퀄 오른쪽의 값으 만든후
  // 왼쪽의 변수나 속성에 값을 넣는다

} //////////////////////////멍멍 함수//////////////////////