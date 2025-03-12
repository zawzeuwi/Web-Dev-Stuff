var display = document.getElementById("result");
display.value = "0";

function addToDisplay(value) {
    if (display.value === "0" || display.value === "Error") {
        display.value = value;
    } else {
        display.value += value;
    }
}

// clear display
function clearDisplay() {
    display.value = "0";
}

// calculation fix(?)
function calculate() {
    try {
        display.value = eval(display.value);
        
        if (display.value === "Infinity" || display.value === "-Infinity") {
            display.value = "Error";
        }
    } catch (error) {
        display.value = "Error";
    }
}

// backspace feature
function backspace() {
    if (display.value === "Error") {
        display.value = "0";
    } else if (display.value.length === 1) {
        display.value = "0";
    } else {
        display.value = display.value.slice(0, -1);
    }
}

// square root
function squareRoot() {
    try {
        var num = parseFloat(display.value);
        if (num < 0) {
            display.value = "Error";
        } else {
            display.value = Math.sqrt(num);
        }
    } catch (error) {
        display.value = "Error";
    }
}

// toggle dark mode and light mode + chgange background
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

function changeBackground() {
    var bgColor = document.getElementById("bg-color").value;
    
    document.body.classList.remove("bg-blue", "bg-green", "bg-purple", "bg-orange");
    
    if (bgColor !== "default") {
        document.body.classList.add("bg-" + bgColor);
    }
}

// keyboard
document.addEventListener("keydown", function(event) {
    var key = event.key;
    
    if ("0123456789+-*/.%".includes(key)) {
        addToDisplay(key);
    }
    
    else if (key === "Enter") {
        calculate();
    }
    
    else if (key === "Escape") {
        clearDisplay();
    }
    
    else if (key === "Backspace") {
        backspace();
    }
    
    //r key for square root
    else if (key === "r") {
        squareRoot();
    }
});