window.addEventListener("DOMContentLoaded",()=>{
     console.log("테스트");


    //  클릭함수호출
    //  C_btns();


     //숨기기 클릭
     Z_btns();
})

/****************** 로더영역 ******************/


// function C_btns(){
//     console.log("클릭");

//     let H_screen = document.querySelector(".hd_screen input").value;
//     console.log(`${H_screen}`);
//     let M_btns = document.querySelectorAll(".common_flex input")
    

//     M_btns.forEach((val,idx)=>{

//         val.onclick=()=>{
//             console.log(`${val.value}내용`);

//         }
//     })


// }


function Z_btns(){
    console.log("최소화");

    let cal = document.querySelector("#calculator")
    let btn = document.querySelectorAll(".hd_button input");
    

    for(let x of btn){
        console.log(`${x.value}`);

        x.onclick = ()=>{
            console.log(`${x.value}`)
            
            if( x.value === "×"){
                cal.style.transform = 'scale(0)';
            } else if( x.value === "-") {
                // cal.style.right = '100px';
                cal.style.transform ='scale(1)';
            } else if( x.value === "+"){
                cal.style.transform = 'scale(2)'; 
            }
        }
        
    }
}


