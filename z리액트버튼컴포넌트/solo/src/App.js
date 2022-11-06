// import styled from "styled-components";
// import { createGlobalStyle } from "styled-components";
// import Buto from "./auto"



// const RedButton = styled.button`
//   background-color : red;
//   color : white;
//   display : block;
// `
// const BlueButton = styled(RedButton)`
//   background-color : blue;
//   color : white;
//   padding : 10px;
//   display : block;
// `

// const ChangeButton = styled.button`
//   color : black;
//   background-color : ${(props)=> (props.color ? "skyblue" : "white")};
//   display : block;
// `

// const DefaulButton = styled.button`
//   color : black;
//   background-color : ${(props)=>(props.color ? props.color : "yellow")};
//   display : block;
// `

// const OrButton = styled.button`
//   background-color : ${(props)=>(props.color || "green" )};
//   display : block;
// `

// const GlobalStyle = createGlobalStyle`
//   button {
//     padding: 20px;
//     border-radius : 50px
//   }
// `
// const Overbutton = styled.button`
//     background-color : skyblue;
//     padding : 20px;
//     transition : .5s;

//     &:hover{
//       background-color : yellow;
//     }
// `

// const ModalBackdrop = styled.div`
//   width:500px;
//   heigth:500px;
//   background-color: rgba(0, 0, 0, 0.400);
  
// `;


// export const ModalView = styled.div.attrs((props) => ({
//   role: 'dialog',
// }))`
//   display:block;
//   background-color: blue;
//   width:200px;
//   heigth:200px;
//   color: white;

// `;
import './app.css'
import { useDispatch, useSelector } from 'react-redux';
import {increase, decrease} from './index'




function App() {
  const dispatch = useDispatch();

  const state = useSelector((state) => state)
  const state1 = useSelector((state) => state + 100)

  const plusNum = () => {
    dispatch(increase());
  };

  const minusNum = () => {
    dispatch(decrease());
  };

  return (
    <>
    <div className="container">
      <h1>{`Count: ${state}`}</h1>
      <h1>{`Count: ${state1}`}</h1>
      <div>
      <button className="plusBtn" onClick={()=>dispatch(increase())}>
          +
        </button>
        <button className="minusBtn" onClick={minusNum}>
          -
        </button>
      </div>
    </div>
    {/* <GlobalStyle/> */}
    {/* <h1>테스트중</h1> */}
    {/* <RedButton>상속 RedButton</RedButton> */}
    {/* <BlueButton>상속 BlueButton</BlueButton> */}
    {/* <ChangeButton>props 버튼테스트1</ChangeButton> */}
    {/* <ChangeButton color>props 버튼테스트2</ChangeButton> */}
    {/* <DefaulButton>값이있나?</DefaulButton> */}
    {/* <DefaulButton color="pink">값이있나?</DefaulButton> */}
    {/* <OrButton>or 버튼</OrButton> */}
    {/* <OrButton color="orange">or 버튼</OrButton> */}
    {/* <Overbutton>호버버튼</Overbutton> */}
    {/* <ModalBackdrop>테스트</ModalBackdrop>
    <ModalView onClick={(event)=> console.log(event)}>프롭스테스트</ModalView>
    <Buto></Buto> */}
    </>
  );
}

export default App;
