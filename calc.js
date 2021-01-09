document.getElementById("calc-widget").querySelector(".close-widget").onclick = (evt) => {
    evt.target.parentNode.classList.remove("opened");
}
document.getElementById("calc-widget").onclick = (evt) => {
    evt.target.classList.add("opened");
}

let calc_widget = document.getElementById("calculator");
const buttons = calc_widget.getElementsByTagName("button");
for(let i = 0; i < buttons.length; ++i) {
    buttons[i].onclick = (evt) => validate(evt.target.innerText);
}
calc_widget.querySelector("input").onkeyup = (evt) => {
    if(evt.key == "Enter") {
        evt.target.value = operation = eval(evt.target.value);
        calc_widget.classList.add("entered");
    }
    else calc_widget.classList.remove("entered");
}

let operation = "";
let operator_entered_last = false;

function validate(button) {
    calc_widget.classList.remove("entered");
    if(button == "+" || button == "-") {
        if(operator_entered_last) {
            operation = operation.slice(0, -2);
        }
        operation += " " + button;
        operator_entered_last = true;
    }
    else if(button == "÷") {
        if(operator_entered_last) {
            operation = operation.slice(0, -2);
        }
        operation += " /";
        operator_entered_last = true;
    }
    else if(button == "×") {
        if(operator_entered_last) {
            operation = operation.slice(0, -2);
        }
        operation += " *";
        operator_entered_last = true;
    }
    else if(button == "^") {
        if(operator_entered_last) {
            operation = operation.slice(0, -2);
        }
        operation += "**";
        operator_entered_last = true;
    }
    else if(button == "Clr") {
        operation = "";
    }
    else if(button == "Del") {
        operation = operation.slice(0, -1);
    }
    else if(button == "=") {
        operation = eval(operation);
        calc_widget.classList.add("entered");
    }
    else if(button == "More...");
    else {
        operation += button;
        operator_entered_last = false;
    }
    calc_widget.querySelector("input").value = operation;
}