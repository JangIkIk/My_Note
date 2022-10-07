import React from "react";
import './App.css';
import Stars from "./component/Stars"
import Submit from "./component/Submit"


/*
1. 별5개가 화면중앙에나온다. [완료]
2. 별에 마우스를 올렸을시 별의 색상이 변해야한다
3. 3번째 별에 올렸을시 이전 별들또한 색이 같이 변해야한다
4. 해당 별을 클릭했을시 색상이 유지되지야한다
5. 3번째 별을 클릭했을시 이전 별들또한 색이 같이 변해야한다.
6. 별을 두번클릭했을시 별의 반만 색이 변해야한다.
7. 별점을 준후 버튼을 클릭했을시에 "n점 리뷰 감사합니다" 라는 문구가 출력되야한다.
https://bennettfeely.com/clippy/
https://codepen.io/bennettfeely/pen/azJWWX/
*/

function App() {
   return (
      <div className="container">
         <Stars/>
         <Submit/>
      </div>
   )
}
export default App;

