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
// 지금은 이해 안간다.
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

// 5. Class의 상속
class Shape{
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    Calc(){
        return this.width * this.height;
    }
    Text(){
        console.log(`이 도형의 색깔은 ${this.color} 입니다.`);
    }
}

//Class를 활용한 new Instance 생성
const Triangle = new Shape(20,20, 'orange');
console.log(Triangle.width);
Triangle.Text();

// Class의 상속을 활용한 new Class의 생성
class Square extends Shape{};
class Ellipse extends Shape{
    Calc(){
        console.log('계산하기시러');
    }
    Text(){
        console.log(`도형색은 알아서 뭐하게?`);
        // 상속받은 메소드를 사용하기 위한 명령어 super.메소드();
        super.Text();
    }
}
// new Class에 new Instance를 생성
const Circle = new Ellipse(10,10,'red');
Circle.Calc();
Circle.Text();


// 6. Class checking: instanceof;
console.log(Circle instanceof Ellipse); //true
