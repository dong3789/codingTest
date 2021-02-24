class Calculator {
    constructor(number) {
        this.number = number;
    }
    displayCal(res) {        
        let dit = disPlayRes.innerText += res;
        return dit;
    }

    resultCal(num1, numOper, num2) {
        switch(numOper){
            case '+' : result = num1 + num2; break;
            case '-' : result = num1 - num2; break;
            case '*' : result = num1 * num2; break;
            case '/' : result = num1 / num2; break;            
        }        
        cal.displayCal(result.toString(2));
    }
    
}

// display 출력
const disPlayRes = document.querySelector('#res');
const btn = document.querySelectorAll('button');
const cal = new Calculator();

let result = 0;

btn.forEach( num => {
    num.addEventListener('click', (e) => {
        const inputCal = e.target.innerText;
        let returnCal = cal.displayCal(inputCal);
        
        const exr = /(\-|\*|\/|\+|\=|\C)/g;  // 정규식으로 기호 분리
        const number = returnCal.split(exr);  // 기호 기준 좌우 값 출력

        const num1 = parseInt(number[0], 2);
        const numOper = number[1];
        const num2 = parseInt(number[2], 2);
        
        if(number.includes('=')){
            disPlayRes.innerText = "";
            cal.resultCal(num1, numOper, num2);
        }else if(number.includes('C')){
            disPlayRes.innerText = "";
        }

    });
    
});