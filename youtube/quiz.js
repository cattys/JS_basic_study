function calculate(command, a, b){
    switch(command){
        case 'add':
        console.log(a + b);
        break;
        
        case 'substract':
        console.log(a - b);
        break;

        case 'divide':
        console.log(a / b);
        break;

        case 'multiply':
        console.log(a * b);
        break;

        case 'remainder':
        console.log(a % b);
        break;
        default:
        // console.log('잘못된 명령어 입니다.')
            throw Error('unknow command');
    }
}

calculate('add',1,2);
calculate('substract',1,2);
calculate('divide',1,2);
calculate('multiply',1,2);
calculate('remainder',1,2);
calculate('ㅇㄻㄴ',1,2);

