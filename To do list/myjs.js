'use strict';

// 1. 네모박스 누르면 classList.toggle(‘on’);
let listBox = document.querySelectorAll('.list__chk--box');
let listWrap = document.querySelector('.list__wrap')
listBox.forEach((element, index) => {
    element.addEventListener('click', (e) => {
        listBox[index].classList.toggle('on');
        console.log(123)
    })

});
// 2. 추가 방법 : createElement로 만들고 
// [] 배열의 length-1번째 뒤에 push로 추가한다.
let newFn = ()=>{
    let listAdd = document.querySelector('.list__add');
    let newABC = ''
    let ABC =''
    listAdd.addEventListener('click', () => {
        let newList = document.createElement('div');
        let newList2 = document.createElement('div');
        let newList3 = document.createElement('span');
        let newList4 = document.createElement('i');
        let newList5 = document.createElement('div');
        let newList6 = document.createElement('div');
        let newList7 = document.createElement('i');
        
        newList.className = 'list';
        newList2.className = 'list__chk--box on';
        newList3.className = `list__chk`;
        newList4.className = `fas fa-check`;
        
        newList5.className = 'list__display';
        newList6.className = 'list__trash';
        newList7.className = 'far fa-trash-alt';
        
        ABC = prompt('enter new to do');
        newList5.innerHTML = ABC;
    
        newList3.appendChild(newList4);
        newList2.appendChild(newList3);
        newList.appendChild(newList2);
        newList6.appendChild(newList7);
        newList.appendChild(newList5);
        newList.appendChild(newList6);
        listWrap.appendChild(newList);
    })
}

// 3. 삭제 방법: 클릭한 아이콘의 부모 index를 알아낸뒤, 그 해당 index를 삭제한다.

let deleteFn = ()=>{
    let delEl = document.querySelectorAll('.list__trash');
    delEl.forEach( a => {
        a.addEventListener('click', (e)=>{
            let bb = a.parentNode;
            a.parentNode.parentNode.removeChild(bb);
            console.log(12356)
            console.log(e);
        })
        
    });
}

newFn();
deleteFn();