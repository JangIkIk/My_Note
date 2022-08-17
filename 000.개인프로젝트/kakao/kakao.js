window.addEventListener("DOMContentLoaded", ()=>{
    console.log("이벤트실행");

    // gnb메뉴 마우스 오버
    gmo();

    
}) ////// 실행영역 //////////




// 코드 줄이는법 찾아보자@@@@@@@@@@@@@@@@@@@@@@@@@
function gmo(){

    const gnb = document.querySelectorAll(".gnb li a");

    for (let x of gnb){


        x.onmouseover=()=>{
            switch(x.innerText){
                case "카카오":
                    gnb[1].style.color = "grey";
                    gnb[2].style.color = "grey";
                    gnb[3].style.color = "grey";
                    break ;
                case "뉴스":
                    gnb[0].style.color = "grey";
                    gnb[2].style.color = "grey";
                    gnb[3].style.color = "grey";
                    break ;
                case "기술과 서비스":
                    gnb[0].style.color = "grey";
                    gnb[1].style.color = "grey";
                    gnb[3].style.color = "grey";
                    break ;
                case "약속과 책임":
                    gnb[0].style.color = "grey";
                    gnb[1].style.color = "grey";
                    gnb[2].style.color = "grey";
                    break ;

            }////////over switch//////////////
        }//////////////mouseover//////////////////


        x.onmouseout = ()=>{
            switch(x.innerText){
                case "카카오":
                    gnb[1].style.color = "black";
                    gnb[2].style.color = "black";
                    gnb[3].style.color = "black";
                    break ;
                case "뉴스":
                    gnb[0].style.color = "black";
                    gnb[2].style.color = "black";
                    gnb[3].style.color = "black";
                    break ;
                case "기술과 서비스":
                    gnb[0].style.color = "black";
                    gnb[1].style.color = "black";
                    gnb[3].style.color = "black";
                    break ;
                case "약속과 책임":
                    gnb[0].style.color = "black";
                    gnb[1].style.color = "black";
                    gnb[2].style.color = "black";
                    break ;

            }////////over switch//////////////
        }////////////mouseout/////////////////////
    }



}


