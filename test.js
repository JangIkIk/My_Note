function browserStack(actions, start) {
  // TODO: 여기에 코드를 작성합니다.
  
  // 주의사항!! : start의 타입이 문자열이 아니라면 false를 리턴
  if(typeof(start) !== "string"){
    return false;
  }

  let now = start;
  let prevstack = [];
  let nextstack = [];


  for(let i = 0 ; i < actions.length ; i++){
   
    if(typeof actions[i] === "string"){

      prevstack.push(now);
      now = actions[i];
      nextstack = []
      
    } else if(actions[i] === -1  && prevstack.length !== 0){

      let prevPage = prevstack.pop();
      nextstack.push(now);
      now = prevPage;
    } else if(actions[i] === 1 && nextstack.length !== 0){
      
      let nextPage = nextstack.pop();
      prevstack.push(now);
      now = nextPage

    }

   
  }

  return [prevstack, now, nextstack];
}


const actions = ["B", "C", -1, "D", "A", -1, 1, -1, -1];
const start = "A";
const output = browserStack(actions, start);

console.log(JSON.stringify(output)); // [["A"], "B", ["A", "D"]]


// 만약에 새로운페이지 접속하면 
// prev스택에 현재페이지를 넣고
// next스택을비운다


// 만약 뒤로가기 -1 일경우
// next스택에 현재페이지를 넣고
// prev스택의 제일 마지막에 있는 페이지가 현재페이지가되고 prev의 마지막페이지를 지워준다
//  만약 앞으로가기 1 일경우 
//  현재페이지를 prev 스택에 넣는다
//  next스택의 마지막 페이지로 이동후 next스택의 마지막 페이지를 삭제 
// 만약 뒤로가기,앞으로가기 버튼이 비활성화일경우 스택에 push하지 않는다.
// 뒤로가기 비활성화일경우는 ? 첫페이지
// 앞으로가기 비활성화일경우는 ? 새로운페이지