/*
1. dv1을 클릭시 true라면 dv1만 배경변경!
2. dv2을 클릭시 true라면 dv1과 dv2만 배경변경
*/

import { useState } from "react";


function Stars(){
  

   const [star, setStar] = useState(Array(5).fill(0).map((v,i)=>i+1));
//    console.log(star[0])
//    console.log(star[1])
//    console.log(star.length)
// https://www.youtube.com/watch?v=eDw46GYAIDQ

    function add(el){
        console.log(el.innerText);
    }
  
   

    return(
        <>  
                    <ul className="dot_star"> 
                        <li className="li_star">
                                <span className="star" onClick={add} style={{background: star[0] < star ? "red" : "white"}}/>{star[0]}</li>
                        <li className="li_star">
                                <span className="star" onClick={add} style={{background: star[1] < star ? "red" : "white"}}/>{star[1]}</li>
                        <li className="li_star">
                                <span className="star" onClick={add} style={{background: star[2] < star ? "red" : "white"}}/>{star[2]}</li>
                        <li className="li_star">
                                <span className="star" onClick={add} style={{background: star[3] < star ? "red" : "white"}}/>{star[3]}</li>
                        <li className="li_star">
                                <span className="star" onClick={add} style={{background: star[4] < star ? "red" : "white"}}/>{star[4]}</li>
                    </ul>
        </>
    )
}
export default Stars;