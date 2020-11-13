// object 서로 연관된 특징과 행동들을 묶어두는것
// >> 묶어두는것: 자료구조
// >> 타입이 있는 언어에서는 동일한 타입만 담아둘수있음

// >>but JS는 dynamically typed language라서 타입이 없음

// 자료구조와 알고리즘....
// Array 
// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['🍎','🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[fruits.length-1]); //마지막 데이터
console.clear();
// 3. Looping
for(let data of fruits){
    console.log(data);
}

for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

console.clear();
fruits.forEach((value, index, array )=> {
    console.log(value);
    console.log(index);
    console.log(array);
});

// 4. 배열에 추가 삭제 복제
// 제일 뒤에 넣을수 있는 API: push
fruits.push('🍓','🍑')
console.log(fruits);
// 제일 뒤에서 삭제하는 API: pop
fruits.pop();
fruits.pop();
console.log(fruits);

// 제일 앞에서부터 추가하는 API: unshift
fruits.unshift('🍓','🍋');
console.log(fruits);

// 제일 앞에서부터 삭제하는 API: shift
var avv = fruits.shift();
console.log(fruits);
console.log(avv);

//  ✌🏻 shift, unshift는 pop, push보다 훨씬 느림

// 지울곳 혹은 넣을곳을 지정해주는 splice(시작index, 갯수(옵션));
fruits.splice(1,2); //지움
fruits.splice(1,2,'🍏','🍐'); //해당위치에 추가해줌'
console.log(fruits); 

console.log(fruits);
//💛 fruits.splice(1); //지정한 데이터만 두고 나머지 다 지워버림

// 배열1.concat(배열2); 
// 배열1의 끝에 배열2를 연결해줌
const fruits2 = ['🍏','🍐'];
const newFruits = fruits.concat(fruits2)
console.log(newFruits);

// 5. Searching
// find the index
console.clear();
console.log(newFruits);

// 특정 아이템이 어디 index에 있는지 알고싶을때: indexOf >> 배열안에 없으면 -1이 출력이됨
console.log(newFruits.indexOf('🍏'));


// 배열에 특정 아이템이 있는지 알고싶을때: includes (t/f)
console.log(newFruits.includes('🍓'));

// lastIndexOf
console.log(newFruits.indexOf('🍏')); // 앞에서부터 찾기 시작
console.log(newFruits.lastIndexOf('🍏')); //뒤에서부터 찾기 시작
