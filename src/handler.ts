
import { addition,multi,diff,div } from "./calc.js";
    let num1 = document.getElementById("n1") as HTMLInputElement;
    let num2 = document.getElementById("n2") as HTMLInputElement;
    let oper = document.getElementById("op") as HTMLInputElement;
    const messageElement = document.getElementById("message") as HTMLParagraphElement;
    const wrongnum = document.getElementById("wrong_num") as HTMLInputElement
    const btn = document.getElementById("btn1") as HTMLButtonElement;
    const nxt = document.getElementById("btn2") as HTMLButtonElement;
    let numero1:number = parseFloat(num1.value)
    let numero2:number = parseFloat(num2.value)
    let operand = oper.value
    const tests:string [] =["+","-","*","/"]
    
    btn.addEventListener("click", () => {
        if( Number.isNaN(numero1) || Number.isNaN(numero2) ){
            const msg2: string = "Please enter a real number!"
            wrongnum.textContent=msg2;
        }
       let res=0;
        console.log(operand);
        switch(operand){
            case "+":{
                res=addition(numero1,numero2);
                printres(res)   
                break;
            }
            case "-":{
                res=diff(numero1,numero2);
                printres(res)   
                break;
            }
            case "*":{
                res=multi(numero1,numero2);
                printres(res)
                break;
            }
            case "/":{
                if(numero2!= 0){
                    res=div(numero1,numero2)
                    printres(res)
                }else{
                    const msg3: string = "Nothing is divisible by 0!"
                    wrongnum.textContent=msg3;  
                }
                break;
            }
            default:{
                const wrongop = document.getElementById("wrong_op") as HTMLInputElement
                const msg1: string = "Wrong Operation!"
                wrongop.textContent = msg1;
                //wait(3000);
            } 
        }
    });
    nxt.addEventListener('click',() => {
        wait(1)
    })
    function printres(a:number){
        console.log(a.toString())
        const a_: string = a.toString();
        messageElement.textContent = a_; // Set the paragraph text
    }
    function wait(a:number){
        setTimeout(function(){
            window.location.reload();
        }, a); 
    }



