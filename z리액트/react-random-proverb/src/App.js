//eslint-disable // 좋지않은문법오류를 나타내지않음

import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';



function App() {

  // let [a,b] = [10,100]

  // ES6 destructuring문법
  let [title,titleChange] = useState(["가나무사진1","나나무사진2","다나무사진3"]); /// [state데이터, state데이터 변경 함수] 
  // state함수를 사용해요 state값을 변경하거나 할수있음
  // 1.변수대신 쓰는 데이터 저장공간
  // 2. useState()를 이용해 만들어야함
  // 3. 문자,숫자,array,object 다 저장가능
  // 4. state에 데이터를 저장해놓는 이유는? 웹 app처럼 만들수있음
  // 5. 새로고침없이도 HTML이 자동으로 재렌더링이됨
  // 변경이되는 중요한데이터들은 state로 만들어서 시용!! 
  // import를 써야 사용이가능
  // state는 직접변경이 불가능하기때문에 특정변수에 값을 복사한다음에
  // 재할당으로 진행하여 값을 변경한다.
  
  let [nummber,nummberChange] = useState(0);



  function Changname(){
    let Name = [...title];
    Name.sort(()=>{})
  }

 return (
  <div className='App'>
    <div className='black-nav'>
      <div> 개발 Blog </div>
    </div>
    <div>
    <button onClick={Changname}>제목바꾸기</button>
    </div>
    <div className='list'>
      <h4>{title[0]} <span onClick={()=>{nummberChange(nummber + 1);}}>👍</span> {nummber} </h4>
      {/* onClick = {무조건 함수} */}
      <p>2022년 9월 28일 수요일</p>
      <hr/>
    </div>
    <div className='list'>
      <h4>{title[1]}</h4>
      <p>2022년 9월 28일 수요일</p>
      <hr/>
    </div>
    <div className='list'>
      <h4>{title[2]}</h4>
      <p>2022년 9월 28일 수요일</p>
      <hr/>
    </div>
  </div>
 )
}
// 현재 App.js는 메인페이지다 그이유는 index.js의 파일이 
// public 디렉토리에 있는 index.html에 박아 넣어주라는 명령어가있음
export default App;
