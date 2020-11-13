'use strict';
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.toString()); //내가 쓴것
    console.log(fruits.join('|')); //정답
}


// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    // const abc = [];
    // abc.push(fruits);
    // console.log(abc);
    const result = fruits.split(',', 2);
    // ,로 나눠서 알아서 2개만 배열로 return해줌
    console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const re = array.reverse();
    console.log(re);
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const re = array.slice(2,5);  //원본 배열은 수정하지않음
    // const re = array.splice(2,4); //원본 배열 자체를 수정한다
    console.log(re);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];
console.log(students);

// Q5. find a student with the score 90
{
    // for(let data of students){
    //     if(data.score == 90){
    //         console.log(data.name);
    //     }
    // }
    const result = students.find((value, index)=>{
        console.log(value, index);
        return value.score == 90; //해당되는 배열 아이템만 return됨
    })
}

// Q6. make an array of enrolled students
{}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{}

// Q8. check if there is a student with the score lower than 50
{}

// Q9. compute students' average score
{}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{}