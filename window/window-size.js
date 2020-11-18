'use strict';


/*
window.screen => 모니터 크기 (browser크기 조절에 영향 안받음)
window.outer => 검색창 등을 포함한 browser window 크기
window.inner => 검색창 등을 제외한 스크롤바를 포함한 페이지가 표기되는 browser window 전체
documentElement.clientWidth => 스크롤바도 제외한 문서 자체 크기
*/

const wrap = document.querySelector('.wrap');
window.addEventListener('resize', ()=>{
    let abc= `<div>window.screen: ${window.screen.height}, ${window.screen.width}</div>`;
    abc+= `<div>window.outer: ${window.outerHeight}, ${window.outerWidth}</div>`;
    abc+= `<div>window.inner: ${window.innerHeight}, ${window.innerWidth}</div>`;
    abc+= `<div>documentElement.clientWidth: ${document.documentElement.clientWidth}, ${document.documentElement.clientHeight}</div>`;
    document.body.innerHTML=abc;
})

