
      // function Person(first, last, age, gender, interests) {
      //   this.name = {
      //     'first': first,
      //     'last' : last
      //   };
      //   this.age = age;
      //   this.gender = gender;
      //   this.interests = interests;
      //   this.bio = function() {
      //     // First define a string, and make it equal to the part of
      //     // the bio that we know will always be the same.
      //     var string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
      //     // define a variable that will contain the pronoun part of
      //     // the second sentence
      //     var pronoun;

      //     // check what the value of gender is, and set pronoun
      //     // to an appropriate value in each case
      //     if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
      //       pronoun = 'He likes ';
      //     } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
      //       pronoun = 'She likes ';
      //     } else {
      //       pronoun = 'They like ';
      //     }

      //     // add the pronoun string on to the end of the main string
      //     string += pronoun;

      //     // use another conditional to structure the last part of the
      //     // second sentence depending on whether the number of interests
      //     // is 1, 2, or 3
      //     if(this.interests.length === 1) {
      //       string += this.interests[0] + '.';
      //     } else if(this.interests.length === 2) {
      //       string += this.interests[0] + ' and ' + this.interests[1] + '.';
      //     } else {
      //       // if there are more than 2 interests, we loop through them
      //       // all, adding each one to the main string followed by a comma,
      //       // except for the last one, which needs an and & a full stop
      //       for(var i = 0; i < this.interests.length; i++) {
      //         if(i === this.interests.length - 1) {
      //           string += 'and ' + this.interests[i] + '.';
      //         } else {
      //           string += this.interests[i] + ', ';
      //         }
      //       }
      //     }

      //     // finally, with the string built, we alert() it
      //     alert(string);
      //   };
      //   this.greeting = function() {
      //     alert('Hi! I\'m ' + this.name.first + '.');
      //   };
      // };

      // let person1 = new Person('Tammi', 'Smith', 32, 'neutral', ['music', 'skiing', 'kickboxing']);
      // console.log(person1.string);


      // class Person {
      //   constructor(first, last, age, gender, interests) {
      //     this.name = {
      //       first,
      //       last
      //     };
      //     this.age = age;
      //     this.gender = gender;
      //     this.interests = interests;
      //   }
      
      //   greeting() {
      //     console.log(`Hi! I'm ${this.name.first} ${this.name.last}`);
      //   };
      
      //   farewell() {
      //     console.log(`${this.name.first} has left the building. Bye for now!`);
      //   };
      // }


      // // let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
      // // han.greeting();


      // // let leia = new Person('Leia', 'Organa', 19, 'female' ['Government']);
      // // leia.farewell();


      // // class Teacher extends Person {
      // //   constructor(first, last, age, gender, interests, subject, grade) {
      // //     this.name = {
      // //       first,
      // //       last
      // //     };
      
      // //   this.age = age;
      // //   this.gender = gender;
      // //   this.interests = interests;
      // //   // subject and grade are specific to Teacher
      // //   this.subject = subject;
      // //   this.grade = grade;
      // //   }
      // // }

      //   class Teacher extends Person {
      //     constructor(first, last, age, gender, interests, subject, grade) {
      //       super(first, last, age, gender, interests);
        
      //       // subject and grade are specific to Teacher
      //       this.subject = subject;
      //       this.grade = grade;
      //     }
      //   }

        


      // //super()연산자는 상위 클래스의 생성자를 호출하며 super()를 통해 상위클래스의 멤버를 상속받을수 있음
      // let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
      // // snape.greeting(); // Hi! I'm Severus.
      // // snape.farewell(); // Severus has left the building. Bye for now.
      // // snape.age // 58
      // // console.log(snape.subject); // Dark arts
      // // console.log(snape.grade);

      
      // console.log(snape.__proto__); // 최초의 프로토타입을 탐색할수있음
      // console.log(snape.__proto__.__proto__); // 최초의 프로토타입을 탐색할수있음
      // console.log(snape.__proto__.__proto__.__proto__); // 최초의 프로토타입을 탐색할수있음
      // console.log(snape.__proto__.__proto__.__proto__.__proto__); // 최초의 프로토타입을 탐색할수있음


      // let div = document.createElement('div');

      // console.log(div.__proto__)
      // div.__proto__.__proto__
      // div.__proto__.__proto__.__proto__
      // div.__proto__.__proto__.__proto__.__proto__
      // div.__proto__.__proto__.__proto__.__proto__.__proto__
      // div.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__
      // div.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__.__proto__

      // 프로토타입 체인을 사용하여 객체 지향 프로그램의 특성중 상속을 구현!!
      // 꼭 들어가야 할 키워드
      // 프로토타입 체인
      // // .prototype
      // // .__proto__ // 상속관계를 확인할때 쓰임
      // // Object
      // // 블로그는 사전에 안내된 수강생 노션 페이지를 이용하여 작성합니다.

      
// 생성자 함수는 인스턴스 객체를 생성하고 초기화하는 특별한 메서드입니다.
// 생성자 함수를 작성하지 않으면, 기본 생성자(default constructor)가 제공되며,
// 기본(base) 클래스일 경우는 기본 생성자는 비어있으며, 파생(derived) 클래스일 경우 기본 생성자는 부모 생성자를 부릅니다.
      

// function add(collection, iteratee) {
//   // TODO: 여기에 코드를 작성합니다.
//   if(Array.isArray(collection)){
//     for(let i = 0 ; i < collection.length ; i++){
//         iteratee(collection[i],i,collection);
        
//     }
//   } else{
//     for(let i in collection){
//       iteratee(collection[i],i,collection) 
      
//   }
//   }



// };


// const letters = ['a', 'b', 'c'];
// const iterations = [];
// add(letters, function (letter, index, collection) {
//   iterations.push([letter, index, collection]);
//   console.log(iterations);
// });



let arr = [1, 2, 2, 3, 4, 4];
let result = [];

  
for(let i = 0 ; i < arr.length ; i++){
  for(let j = 0 ; j <= result.length ; j++){
    if(arr[i] ===)
  }
}




// var selectionSort = function(array) {
//   var length = array.length;
//   var minIndex, temp, i, j;
//   for (i = 0; i < length - 1; i++) { // 처음부터 훑으면서
//     minIndex = i;
//     for (j = i + 1; j < length; j++) { // 최솟값의 위치를 찾음
//       if (array[j] < array[minIndex]) {
//         minIndex = j;
//       }
//     }
//     temp = array[minIndex]; // 최솟값을 저장
//     array[minIndex] = array[i];
//     array[i] = temp; // 최솟값을 제일 앞으로 보냄
//   }
//   return array;
// };

// console.log(selectionSort([5,1,4,7,2,6,8,3]));


















      
      