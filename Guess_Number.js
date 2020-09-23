

let  firstNumber= Math.floor((Math.random() * 100) + 1);
count = 1

document.getElementById("btn_1").addEventListener(
    "click",  
     check
)

function check() {
    let num_1 = document.getElementById("inp_1").value;    
    // const num_2 = parseInt(num_1)
    if (parseInt(num_1) <= 0 || parseInt(num_1) >= 100) {
        document.getElementById("Res").innerHTML = "Heyyyy Mannnnn... Please write a number between 1-100 !!!" 
    } else if (firstNumber === parseInt(num_1)) {
        document.getElementById("Res").innerHTML = "Heyyyy Mannnnn...You did a great job. congratulations you are the Winner." 
        count = 1;
    } else if (firstNumber > parseInt(num_1)) {
        document.getElementById("Res").innerHTML = "OPPPSSSS...you should try again. I think a higher  number"   
        count += 1
    } else  {
            document.getElementById("Res").innerHTML = "OPPPSSSS...you should try again. I think a lower number" 
            count += 1;
        }
}


console.log("object");