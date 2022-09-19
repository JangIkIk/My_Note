// index.html을 열어서 agoraStatesDiscussions 배열 요소를 확인하세요.
console.log(agoraStatesDiscussions); // data script

let data;
const dataFromLocalStorage = localStorage.getItem("agoraStatesDiscussions");
if (dataFromLocalStorage) {
  data = JSON.parse(dataFromLocalStorage);
} else {
  data = agoraStatesDiscussions.slice();
}

// convertToDiscussion은 아고라 스테이츠 데이터를 DOM으로 바꿔줍니다.
const convertToDiscussion = (obj) => {
  const li = document.createElement("li"); // li 요소 생성
  li.className = "discussion__container"; // 클래스 이름 지정

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = "discussion__avatar--wrapper";
  const discussionContent = document.createElement("div");
  discussionContent.className = "discussion__content";
  const discussionAnswered = document.createElement("div");
  discussionAnswered.className = "discussion__answered";

  // TODO: 객체 하나에 담긴 정보를 DOM에 적절히 넣어주세요.
  const avatarImg = document.createElement("img");
  avatarImg.src = obj.avatarUrl;
  avatarImg.alt = "avatar of " + obj.author;
  avatarWrapper.append(avatarImg);

  const discussionTitle = document.createElement("h2");
  const titleAnchor = document.createElement("a");
  titleAnchor.href = obj.url;
  titleAnchor.textContent = obj.title;
  discussionTitle.append(titleAnchor);

  const discussionInformation = document.createElement("div");
  discussionInformation.className = "discussion__information";
  discussionInformation.textContent = `${obj.author} / ${new Date(
    obj.createdAt
  ).toLocaleTimeString()}`;
  discussionContent.append(discussionTitle, discussionInformation);

  const checked = document.createElement("p");
  checked.textContent = obj.answer ? "☑" : "☒";
  discussionAnswered.append(checked);

  li.append(avatarWrapper, discussionContent, discussionAnswered);
  return li;
};

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@ 페이지네이션 구간 ???@@@@@@@@@@@@@@@@@@@@2

// data 배열의 모든 데이터를 화면에 렌더링하는 함수입니다.

// 8. 
// ul = li로 만들어진 데이터들
// pageStart = 10
// pageEnd = 20
const render = (element, from, to) => {
  console.log("첫번째 파라미터",element)
  console.log("두번째 파라미터",from);
  console.log("세번째 파라미터",to);

  if (!from && !to) {
    from = 0;
    to = data.length - 1;
  }
  // 다 지우고 배열에 있는 내용 다 보여주기
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  for (let i = from; i < to; i += 1) {
    element.append(convertToDiscussion(data[i]));
  }
  return;
};

// 페이지네이션을 위한 변수
let limit = 10; 
let page = 1; 

// ul 요소에 data 배열의 모든 데이터를 화면에 렌더링합니다.
const ul = document.querySelector("ul.discussions__container");
render(ul, 0, limit);

// 3.아래 클릭이벤트가 발생한 이벤트 핸들러에서  limit = 10 page = 2로 파라미터를 받음
const getPageStartEnd = (limit, page) => { 
  const len = data.length - 1; // 총데이터의 길이에서 -1
  console.log(len,"data.length의 길이")

  // 4. 받은 파라미터에서 pageStart = (2- 1) * 10 = 10이므로 => pageStart = 10
  let pageStart = Number(page - 1) * Number(limit); 
  // 5. 받은 파라미터에서 pageEnd = 10 + 10이므로 => pageEnd = 20
  let pageEnd = Number(pageStart) + Number(limit);


  if (page <= 0) {
    pageStart = 0;
  }
  if (pageEnd >= len) {
    pageEnd = len;
  }

  // 6. pageStart = 10 , pageEnd = 20으 리턴
  return { pageStart, pageEnd };
};

const buttons = document.querySelector(".buttons"); // 패이지 넘기버튼의 부모요소에 접근
buttons.children[0].addEventListener("click", () => { // 부모요에 클릭이벤트가 발생시에!!
  console.log(buttons.children[0],"버튼요소의 0번쨰아들?");
  if (page > 1) { 
    page = page - 1;
  }
  
  const { pageStart, pageEnd } = getPageStartEnd(limit, page); // 
  render(ul, pageStart, pageEnd);
});

buttons.children[1].addEventListener("click", () => {
  // 1.두번째 버튼에 클릭이벤특 발생하면!!
  // limit 와 page의 초기값은 10 * 1
  // data.length는 41 -1 = 40 이고, limit * page = 10이무로 f문의 조건을 만족하여 page 의 값이 2로증가
  console.log(buttons.children[1],"버튼요소의 1번쨰아들?");
  if (limit * page < data.length - 1) {
    page = page + 1;
  }
  // 2.구조분해할당 문법을 사용하여 getPageStarEnd에서 받은 리턴값을 각각담는다!
  // 먼저 함수에 인자를 담아 호출
  const { pageStart, pageEnd } = getPageStartEnd(limit, page);

  // 7. 리턴받은 값으로 렌더 함수를 호출
  // ul = li로 만들어진 데이터들
  // pageStart = 10
  // pageEnd = 20
  render(ul, pageStart, pageEnd);
});

buttons.children[2].addEventListener("click", () => {
  console.log(buttons.children[2],"버튼요소의 2번쨰아들?");
  localStorage.removeItem("agoraStatesDiscussions");
  data = agoraStatesDiscussions.slice();
  limit = 10;
  page = 1;
  render(ul, 0, limit);
});
//  위에 클릭이벤트는 페이지 네이션을 위한 버튼이벤트

// 문서의 내용을 확인해야 합니다.
const form = document.querySelector("form.form");
const author = form.querySelector("div.form__input--name > input");
const title = form.querySelector("div.form__input--title > input");
const textbox = form.querySelector("div.form__textbox > textarea");

// 문서를 제출해야 합니다.
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const obj = {
    id: "unique id",
    createdAt: new Date().toISOString(),
    title: title.value,
    url: "https://github.com/codestates-seb/agora-states-fe/discussions",
    author: author.value,
    answer: null,
    bodyHTML: textbox.value,
    avatarUrl:
      "https://avatars.githubusercontent.com/u/12145019?s=64&u=5c97f25ee02d87898457e23c0e61b884241838e3&v=4",
  };
  data.unshift(obj);

  // 로컬스토리지에 저장
  localStorage.setItem("agoraStatesDiscussions", JSON.stringify(data));

  // 렌더링
  render(ul, 0, limit);
});