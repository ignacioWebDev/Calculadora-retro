class Calculator {
    constructor(operand1Element, operand2Element) {
        this.operand1Element = operand1Element;
        this.operand2Element = operand2Element;
        this.clear();
    }
    clear(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = '';
        this.update();
    }
    update() {
        this.operand1Element.innerHTML = this.operand1 + this.operator;
        this.operand2Element.innerHTML = this.operand2;
    }
    appendNumber(number) {
        if(number === "." && this.operand2.includes("."))return
        this.operand2 = this.operand2 === 0 ? number: this.operand2.toString() + number;
        this.update();
    }
    delete() {
        if(this.operand === 0)return;
        this.operand2 = +this.operand2.toString().slice(0, -1);
        this.update();
    }
    operation(operator) {
        if (this.operator) {
            this.calculate();
        }
        this.operator = operator;
        this.operand1 = +this.operand2 === 0 ? this.operand1 : this.operand2;
        this.operand2 = 0;
        this.update();
    }
    calculate(){
        switch(this.operator) {
            case "+": 
            this.operand1 = +this.operand1 + +this.operand2;
            break;
            case "-":
                this.operand1 = +this.operand1 - +this.operand2;
            break;
            case "/":
                this.operand1 = +this.operand1 / +this.operand2;
            break;
            case "*":
                this.operand1 = +this.operand1 * +this.operand2;
            break;
        }
        this.operator = '';
        this.operand2 = 0;
        this.update();
    }
}
//Llamando a los botones
const operand1Element = document.querySelector("[data-previous]");
const operand2Element = document.querySelector("[data-current]");
const clearButton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]");
const deleteButton = document.querySelector("[data-delete]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");

//Creando la nueva calculadora
const calculator = new Calculator(operand1Element, operand2Element);

//Eventos de los botones
clearButton.addEventListener("click", () => {
    calculator.clear();
})

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerHTML);
    })
})

deleteButton.addEventListener("click", () => {
    calculator.delete();
})

operationButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.operation(button.innerHTML)
    });
})

equalsButton.addEventListener("click", ()=>{
    calculator.calculate();
})