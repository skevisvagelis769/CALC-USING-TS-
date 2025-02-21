import { addition, multi, diff, div } from "./calc.js";
let num1 = document.getElementById("n1");
let num2_ = document.getElementById("n2");
let num3 = document.getElementById("n3");
EventList(num1);
let num2 = document.getElementById("n2");
let oper = document.getElementById("op");
const messageElement = document.getElementById("message");
const wrongnum = document.getElementById("wrong_num");
const btn = document.getElementById("btn1");
const nxt = document.getElementById("btn2");
let numero1 = parseFloat(num1.value);
let numero2 = parseFloat(num2.value);
let operand = oper.value;
const tests = ["+", "-", "*", "/"];
btn.addEventListener("click", () => {
    if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
        const msg2 = "Please enter a real number!";
        wrongnum.textContent = msg2;
    }
    let res = 0;
    console.log(operand);
    switch (operand) {
        case "+": {
            res = addition(numero1, numero2);
            printres(res);
            break;
        }
        case "-": {
            res = diff(numero1, numero2);
            printres(res);
            break;
        }
        case "*": {
            res = multi(numero1, numero2);
            printres(res);
            break;
        }
        case "/": {
            if (numero2 != 0) {
                res = div(numero1, numero2);
                printres(res);
            }
            else {
                const msg3 = "Nothing is divisible by 0!";
                wrongnum.textContent = msg3;
            }
            break;
        }
        default: {
            const wrongop = document.getElementById("wrong_op");
            const msg1 = "Wrong Operation!";
            wrongop.textContent = msg1;
        }
    }
});
nxt.addEventListener('click', () => {
    wait(1);
});
//=====================================================================FUNCS=====================================================================
function EventList(val) {
    val.addEventListener("click", () => {
        console.log(val.value);
    });
}
function printres(a) {
    console.log(a.toString());
    const a_ = a.toString();
    messageElement.textContent = a_;
}
function wait(a) {
    setTimeout(function () {
        window.location.reload();
    }, a);
}
//# sourceMappingURL=handler.js.map