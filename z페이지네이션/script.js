//https://www.youtube.com/watch?v=d2ve7xQNco8
const ultag = document.querySelector("ul");
// 총 페이지 = 20;
let totalpages = 20;

// 페이지 넘겨지는 함수
function element(totalpages,page){
    //  값을 담을 변수
    let liTag = "";
    // page 파라미터의 값에서 -1
    let beforepages = page - 1;
    // page 파라미터의 값에서 +1
    let afterpages = page + 1;

    //만약 page파라미터의 값이 1보다 크다면
    if(page > 1){
        // liTag변수에 문자열형식이 태그를 넣어준다  이벤트 방식을 또한 인라인 형식으로 넣어주고 클릭이 발생했을때 element함수를 호출!
        liTag += `<li class="btn" onclick="element(totalpages,${page - 1})"><span><i class="left"></i> 왼쪽</span></li>`
    }
    
    // beforepages의 값으로 for문을반복하고 beforepages 가 afterpages 보다 작거나 같을때 beforepages을 증가
    for (let pagelength = beforepages; pagelength <= afterpages; pagelength++) {
        //  해당 조건문이 성립할때 liTag에는 문자열형식인 태그를 넣어주며 beforepages의 값을 넣어줌! 즉지정한 값의 페이지 개수 ?
        liTag += `<li class="num"><span>${pagelength}</span></li>`
        
    }
    // page 의 값이 totalpages보다 작을 경우 문자열형식인 태그를 넣어주고 클릭발생시에 element함수를 호출한다.
    if(page < totalpages){
        liTag += `<li class="btn" onclick="element(totalpages,${page + 1})"><i class="right"></i> 오른쪽</span></li>`
    }
    ultag.innerHTML = liTag;
}

element(totalpages, 2);