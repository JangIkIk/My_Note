import { useEffect } from "react";
import {useRef, useState} from "react"


function Children(){
    console.log("아들함수호출");
    const inputRef = useRef(null);
    const [userList, setUserList] = useState([
        { id : 1, name: "Mike"},
        { id : 2, name: "Tom"},
        { id : 3, name: "Jane"},
        { id : 4, name: "paul"},
    ]);

        function pushNewUser(){
            setUserList([
                {
                    id: userList.length + 1,
                    name : inputRef.current.value,
                },
                ...userList,
            ]);
        }

        useEffect(()=>{
            console.log("유즈이펙트실행");
        },[userList])

    return(
        <div>
            {userList.map((user, index)=> (
                <input
                    key={user.id}
                    type="text"
                    placeholder={user.name}
                    style={{display:"block"}}
                />
            ))}
            <input type="text" ref={inputRef}/>
            <button onClick={pushNewUser}>등록</button>
        </div>
    )

}






export default Children;