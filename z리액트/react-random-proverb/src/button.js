import React from "react";
import "./button.css";

const Button=()=>{
    return(
        <>
        <main className="main_dot">
            <lable className="md_lable">
                <input className="md_input" type="checkbox"></input>
                {/* input 태그의 cheakbox 타입은  클릭시에 기본적으로 체크하는기능 */}
            </lable>    
        </main>
        </>
    )
}

export default Button;