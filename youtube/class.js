'use strict';

// Object-oriented programming
// class: template;
// object: instace of a class
// javascript classes
//  = introduced in ES6
//  = syntactical sugar over prototype-based inheritance

// ES6전에는 클래스를 지정하지않고 바로 객체를 만들었음

// 1.Class declarations (생성자 함수)
class Person {

    // constructor
    constructor(name, age){

        // fields
        this.name = name;
        this.age = age;
    }

    // method
    speak(){
        console.log(`${this.name}: hello!`);
    }
}


const ellie = new Person('ellie', 20);
console.log(ellie.name, ellie.age);
ellie.speak();

// 2. Getter, Setter 커피머신(user가 잘못 설정해도 내가 잘 바꿔주는것)
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age(){ //사용자가 get 호출
        return this._age // this.age를 리턴한다.
    }
    set age(value){ //value를 받으면 set 호출 가능
        this._age = (value <0) ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3.Fields (public, private) << 최근에 추가됨, 최신 브라우저도 지원X
class Experiment {
    publicField = 2; //밖에서 접근 가능
    #privateField = 0; //클래스 내부에서만 값을 볼수있고 접근 가능
}

const experiment = new Experiment();
console.log(experiment.publicField);  //2출력
console.log(experiment.privateField); // undefined 출력

// 4. Static properties and methods << 아직 쓰긴 이름
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();
// 어려워......

