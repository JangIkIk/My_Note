// fetch('http://3.36.72.17:3000/jang/messages')
// .then((response) => response.json())
// .then((data) => console.log(data[0]))





let serch = document.querySelector("#serch");

console.log(serch)

async function roomAll(){
    const response = await fetch('http://3.36.72.17:3000/jang/messages')
    
    const result = document.getElementById('result');

    if(response.ok){
        let JS = await response.json();
        console.log(JS)
        result.innerText = JSON.stringify(JS)
    } else{
        alert("Error" + response.status);
    }
}


async function roomname(){
    const response = await fetch('http://3.36.72.17:3000/jang/messages')
    const result = document.getElementById('roomname');
    const result1 = document.getElementById('result');
    
    const JS = await response.json();
    
    const data = result.value

    
    

    for(let i = 0 ; i < JS.length ; i++){
        if(data === JS[i].roomname){
            result1.innerText = JSON.stringify(JS[i])
            return result
        } else{
            console.log("없는값");
        }
    }


}

async function createroom(){
    const username = document.getElementById("username")
    const text = document.getElementById("text")
    const roomname2 = document.getElementById("roomname2")

    console.log(username);
    console.log(text);
    console.log(roomname2);

    const data ={
        username:username.value,
        text:text.value,
        roomname:roomname2.value,
    }
    const json_data = JSON.stringify(data);
    console.log(json_data)


    const response = await fetch('http://3.36.72.17:3000/jang/messages',{
        method : 'POST',
        headers: {
            'Content-Type' : 'application/json',    // text, text/html
            'Contnet-Length': json_data.length
        },
        body: json_data,
        
    })

    return response;
}


async function createroom2222(){
    
}




