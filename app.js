let input = document.querySelector(".textbox");
let buttons = document.querySelectorAll("button");
let res = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML == '='){
            res = eval(res);
            input.value = res;
        }
        else if(e.target.innerHTML == 'AC'){
            res = "";
            input.value = res;
        }
        else{
            res += e.target.innerHTML;
            input.value = res;
        }
    })
})
