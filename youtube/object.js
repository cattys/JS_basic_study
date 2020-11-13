// primative type은 변수 1개당 값 1개만 가능
// Object로 관리하는게 더 ez함
// object는 key와 value의 집합체이다.
//  >> 우리가 접근할수있는 property와 그 property가 가지고 있는 값


// 1. Literals and Properties
const obj1 = {}; //'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// Js는 Dynamically type langauge이다
// => JS는 runtime때(프로그램이 동작하고 있을때) 타입이 결정됨

const arum = {
    name: 'arum',
    age: 27
}

function print(person){
    console.log(person.name);
    console.log(person.age);
}

print(arum);

arum.hobby = 'play games';
arum.love = 'movies';
console.log(arum.hobby);
console.log(arum.love);
delete arum.love;
console.log(arum);

// 2.Computed properties
console.log(arum.hobby); // 그 값을 받아오고 싶을때
console.log(arum['hobby']); // Computed properties 
// ㄴ원하는 값을 실시간으로 받아올때 사용

function printValue(obj, key){
    console.log(obj.key);  // undefined 표시됨 
    console.log(obj[key]);  // Computed properties 
}

printValue(arum, 'name');

// 3. Property value shorthand //key와 value값이 동일할때 생략가능
function makePerson(name, age){
    return {
        name: name,
        age: age
    }
}

const arumi = makePerson('arumi', 27);
console.log(arumi);

function newAccount(name, age){
    // return {
    //     name: name,
    //     age: age
    // }
    return {
        name,
        age
    }
}
const user1 = newAccount('arum', 27);
console.log(user1.name + '  ' +user1.age);

// 4. Constructor function
function Newbie(name, year){
    this.name = name;
    this.year = year;
}

const hyeok = new Newbie('hyeok', 21);
console.log(hyeok);
console.log(hyeok.name);
console.log(hyeok.year);

const haha = new Newbie('haha', 21);
console.log(haha);

// 5. in operator: property existence check (key in obj) 
// key가 해당 객체안에 존재하는지 확인 가능(f/t)
console.log('name' in arum);

// 6. for in vs for of
// for(key in obj) //객체 key찾기용
// for(value of array) //배열 item 차례로 


// 7. Fun cloning
const usa = {name: 'uas', age: 11};
const usa2 = usa;
usa2.name = "usa2";
console.log(usa.name);

// old way
const usa3 = {};
for (key in usa){
    usa3[key] = usa[key];
}
console.log(usa3);

// other way
const usa4 = {}
Object.assign(usa4, usa); // 복제 받을 애 ,복제 대상
// 또는 const usa4 = Object.assign({}, usa); 
console.log(usa4);