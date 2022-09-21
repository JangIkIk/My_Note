

// function calculateScore(records, value) {
//     // TODO: Your code here!
//    //  animal값이 이 문자열과 일치할경우 
//    // 해당요소의 score 속성값을 모두 더한후에 리턴
  
//     let a = records.filter(function(e){
//       if(typeof e.animal === "string"){
//         return e. score;
//       }
  
//     return a.reduce(function(a,b ){
//       return a + b;
//     })
  
//     })
    
  
//   }
// @@@@@ 누적개념 확인


// function getLengthOfLongestElement(arr) {
//     // 여기에 코드를 입력하세요
  
//     return arr.reduce(function(a,b){
//       if(a.length >= b.length){
//         console.log("비교값",a.length);
//         console.log("비교값",b.length);
//         return a.length;
//       } else{
//         console.log("비교값",b.length);
//         return b.length;
//       }
//     });
  
//   }

  
//   let output = getLengthOfLongestElement(['one', 'two', 'no']);
//     console.log("최종값",output); // --> 5

// 왜 no의 length로 나오는지 ?


// function makeAddressBook(addressBook, user) {
//     let firstLetter = user.name[0];
//     console.log(addressBook)
  
//     if(firstLetter in addressBook) {
//       addressBook[firstLetter].push(user);
//     } else {
//       addressBook[firstLetter] = [];
//       addressBook[firstLetter].push(user);
//     }
  
//     return addressBook;
//   }
  
//   let users = [
//     { name: 'Tim', age: 40 },
//     { name: 'Satya', age: 30 },
//     { name: 'Sundar', age: 50 }
//   ];
  
//   users.reduce(makeAddressBook, {});
//   console.log(users);
  
// function makeAddressBook(addressBook, user) {
//     let firstLetter = user.name[0];
  
//     if(firstLetter in addressBook) {
//       addressBook[firstLetter].push(user);
//     } else {
//       addressBook[firstLetter] = [];
//       addressBook[firstLetter].push(user);
//     }
  
//     return addressBook;
//   }
  
//   let users = [
//     { name: 'Tim', age: 40 },
//     { name: 'Satya', age: 30 },
//     { name: 'Sundar', age: 50 }
//   ];
  
//  let r = users.reduce(makeAddressBook, {});
// console.log(r)


// class Car{
//     constructor(brand, name, color){
//         this.brand = brand;
//         this.name = name;
//         this.color = color;

//         Car.prototype.drive = function(){
//             console.log("운전하기")
//         }
//     }
// }

// let my = new Car("kia","k5","black");

// console.log(my.brand);
// my.drive();

// console.log(my); // 객체형태를 가지고있다

class movie {
    constructor(){
        this.value = 0;
    }
    increase(){
        this.value++
    }
    decrease(){
        this.value--
    }
    getValue(){
        return this.value
    }
}

let cont = new Counter();
cont.increase();
cont.increase();
cont.decrease();
console.log(cont.getValue());



  

  