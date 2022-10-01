import "./togglebtn.css";


function Togglebtn(){
    return(
        <>
        <label className="toggle">
            <input className="toggle_input" type="checkbox"/>
            <span className="toggle_span"/>
        </label>   
        </>
    )
}



export default Togglebtn;

// 1. 라벨에 크기 조정