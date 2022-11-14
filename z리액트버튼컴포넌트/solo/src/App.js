//  // 방법 1
//     // let url = `https://ddragon.leagueoflegends.com/cdn/12.21.1/data/ko_KR/champion/${championId}.json`
    
//     // fetch(url)
//     // .then((response)=> {
//         //     if(!response.ok){
//             //         throw new Error("에러");
//             //     }
//             //     return response.json()
//             // })
//             // .then((data)=> {console.log(data)})
//             // .catch((error)=> console.log(error));
            
//             // 방법 2
//             useEffect(()=>{
//               async function lolData(){
//                   const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.21.1/data/ko_KR/champion/${championId}.json`);
//                   const result = await response.json();
//                   if(!response.ok){
//                       throw new Error('404 Not Found');
//                   }
                  
//                   return result;
//               }
//               lolData().then((data)=> setTest(data))
//               lolData().catch(()=> console.log("에러?"))
//           }, [championId])
//   console.log(test);
//   // console.log("Test객체",Test.data)
//   // console.log("lol데이터",lol.data)
//       // const imagesURL = "http://ddragon.leagueoflegends.com/cdn/12.21.1/img"        
//       // 메인이미지 경로 -> "http://ddragon.leagueoflegends.com/cdn/12.21.1/img/champion/Aatrox.png"
//       // 스킬 경로 -> "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/spell/AatroxQ.png",
//       // 패시브 경로 -> "https://ddragon.leagueoflegends.com/cdn/12.21.1/img/passive/Aatrox_Passive.png",

// -------------------------------
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
import {useState, useEffect} from "react";
import styled from "styled-components";
import Footer from './Footer';


// const Test = styled.div`
//   width:50px;
//   height:50px;
//   margin:10px;
// `

function App() {
  const [test, setTest] = useState({})
  
  
  // console.log("test의 값",test)
  useEffect(()=>{
    console.log("useEffect start")
    async function lolData(){
        const response = await fetch(`https://ddragon.leagueoflegends.com/cdn/12.21.1/data/ko_KR/champion/Aatrox.json`);
        console.log("response 할당");
        const result = await response.json(); 
        console.log("result 할당",result)
        // console.log(response)
        if(!response.ok){
          console.log("오류실행");
            throw new Error('404 Not Found');
          }    
        //   if (test['Aatrox']) {
        //   console.log("test의 값", test);
        //   console.log("test.Aatrox의 값", test.Aatrox);
        //   console.log("test.Aatrox의 값 >>> ", test.Aatrox.id);
        // }
        return result.data;
      }
      lolData().then((data)=> setTest(data))
    lolData().catch(()=> console.log("에러?"))
  },[]);
  // if (Object.keys(test).length !== 0) {


    return (
      <>
        <p>테스트</p>
        { <div>{ test['Aatrox'] ? test.Aatrox.id : '' }</div>}
        <Footer></Footer>
      </>
    )
  
}

  // const dispatch = useDispatch();

  // const state = useSelector((state) => state)
  // const state1 = useSelector((state) => state + 100)
  
  
  
  // const plusNum = () => {
    //   dispatch(increase());
    // };
    
    // const minusNum = () => {
      //   dispatch(decrease());
      // };

// const [card, setCard] = useState(Array(5).fill(false))

//   const cardChange = (idx)=>{
//     let result = [...card];
//     result[idx] = !result[idx]
//     setCard(result);
//   }

    // <>
//     {card.map((el, idx)=>{
//       return (
//         <div key={idx}>
//           <Test
//             className={ el ? "card_front" : "card_back"}
//             onClick={()=>cardChange(idx)}/>
//         </div>
//       )
//     })}
    // {/* <div className="container">
    //   <h1>{`Count: ${state}`}</h1>
    //   <h1>{`Count: ${state1}`}</h1>
    //   <div>
    //   <button className="plusBtn" onClick={()=>dispatch(increase())}>
    //       +
    //     </button>
    //     <button className="minusBtn" onClick={minusNum}>
    //       -
    //     </button>
    //   </div>
    // </div> */}
    // {/* <GlobalStyle/> */}
    // {/* <h1>테스트중</h1> */}
    // {/* <RedButton>상속 RedButton</RedButton> */}
    // {/* <BlueButton>상속 BlueButton</BlueButton> */}
    // {/* <ChangeButton>props 버튼테스트1</ChangeButton> */}
    // {/* <ChangeButton color>props 버튼테스트2</ChangeButton> */}
    // {/* <DefaulButton>값이있나?</DefaulButton> */}
    // {/* <DefaulButton color="pink">값이있나?</DefaulButton> */}
    // {/* <OrButton>or 버튼</OrButton> */}
    // {/* <OrButton color="orange">or 버튼</OrButton> */}
    // {/* <Overbutton>호버버튼</Overbutton> */}
    // {/* <ModalBackdrop>테스트</ModalBackdrop>
    // <ModalView onClick={(event)=> console.log(event)}>프롭스테스트</ModalView>
    // <Buto></Buto> */}

    // // </>
 
export default App;