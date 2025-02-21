//import { redir } from "./index";
//export function GetValues(){
    // Select the input field and button
    let num1 = document.getElementById("n1") as HTMLInputElement;
    const btn = document.getElementById("btn1") as HTMLButtonElement;

    // Ensure elements exist before adding an event listener

    btn.addEventListener("click", () => {
         let numero:number = parseFloat(num1.value)
        if( Number.isNaN(numero) ){
            window.location.href = "test.html"; // Redirects in the same tab
        }
        console.log(numero.toString()); // Print to console
    });
//}


