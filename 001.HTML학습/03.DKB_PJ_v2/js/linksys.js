// 도깨비 PJ 링크시스템 JS - linksys.js


/* 제이쿼리 코드구역  */

$(() => {
  //  실행구역 확인
  console.log("로딩완료!");

  // 메뉴 a링크 셋팅하기
  // 대상 : .gnb a
  // e 변수 -> 이벤트발생 요소의 이벤트관련 속성/메서드 전달
  $(".gnb a, .tmenu a").click(function (e) {
    // 기본이동막기
    e.preventDefault();


    // 1. 클린된 텍스트 읽기
    // this는 클릭된 a요소 자신
    let txt = $(this).text().trim();
    console.log(txt);
    //trim() 문자열 앞뒤공백제거

    // 이동 페이지주소 변수
    let url;

    // 2. 이동버튼에 해당하는 페이지 주소 분기
    switch (txt) {
      case "인물관계도":
        url = "cat";
        break;
      case "프로그램 소개":
        url = "cat";
        break;
      case "시청자 게시판":
        url = "board";
        break;
      case "로그인":
        url = "login";
        break;
      case "회원가입":
        url = "member";
        break;
      case "트위터 바로가기":;
        url = "twitter";
        break;
      case "인스타그램 바로가기":;
        url = "instagram";
        break;
      case "페이스북 바로가기":;
        url = "Fecebook";
        break;
        default: url = "etc";
    } ////////switch case///////////////

    // 3. 페이지 이동하기
    // location.href = 주소 -> 페이지이동하기
    if(url==="etc")
        alert("현재 페이지는 오픈준비중");
    
    else if(url==="twitter") {
        alert("트위터 로그인이 필요합니다");
        window.open().location.href = "https://twitter.com/?lang=ko";
        // window.open() 새창열기
    
      }    
    else if(url==="instagram") {
      alert("인스타그램 로그인이 필요합니다");
        window.open().location.href = "https://www.instagram.com/";
        // window.open() 새창열기
    
      }    
    else if(url==="Fecebook") {
      alert("페이스북 로그인이 필요합니다");
        window.open().location.href = "https://ko-kr.facebook.com/login.php?next=https%3A%2F%2Fko-kr.facebook.com%2Fprivacy%2Fconsent%2Fpipa%2F%3Fparams%255Bpft_surface%255D%3Dfacebook_comet%26params%255Bis_new_user_blocking_flow%255D%3Dfalse%26params%255Bpft_session_key%255D%3D2e2d9133-1cb4-467e-b221-63ef1e87622a%26params%255Bis_existing_user_blocking_flow%255D%26source%3Dpipa_blocking_flow";
        // window.open() 새창열기
    
      }    
    else // 이동 페이지일경우 -> 페이지내에서 이동할경우 인것같음
    location.href = url+".html";





  }); ////////////click ////////////////

}) ///////////// JQB ////////////////
/////////////////////////////////////


// 참고) 본 파일을 html에서 불러올때 defer키워드를
// 사용하면 html이 모두 로딩후 실행 된다
// 예) <script src="외부JS 파일" defer></script>
// 그러나 defer 속성의 누락등으로 위험성이 존재하므로
// JS코딩자체에 로딩구역을 만드는게 좋음!