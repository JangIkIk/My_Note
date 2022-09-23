

class cat{
    constructor(name = "나무", age = 3 ) {
      this.name = name;
      this.age = age;
    }
  
    Introduce(){
      console.log(`${this.name}는 ${this.age}살 입니다.`); 
    }
  }


  
  
  class dog extends cat{
      constructor(name,food){
          super()
          this.name = name
          this.food = food;
          
          
        }
        Introduce(){
            console.log(`${this.name}는 ${this.age}살 입니다. ${this.food}`);
        
        }
    }

    
    

    let mycat = new cat();
    mycat.Introduce();

    let mydog = new dog("멍멍","밥");
    mydog.Introduce();
    





