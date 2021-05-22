var wh = document.getElementsByClassName('white');

var display = document.getElementById('display');

var re = document.getElementsByClassName('red');

for (var i = 0; i < wh.length; i++) {

    wh[i].addEventListener('mouseenter', function () {
        this.style.backgroundColor = 'gray';
    });

    wh[i].addEventListener('mouseleave', function () {
        this.style.backgroundColor = 'white';
    });


    wh[i].addEventListener('mousedown', function () {
        this.style.boxShadow = "1px 1px 1px 1px  gray";
    });


    wh[i].addEventListener('mouseup', function () {
        this.style.boxShadow = "0px 0px 0px 0px  white";
    });
}

for (var k = 0; k < re.length; k++) {
    re[k].addEventListener('mouseenter', function () {
        this.style.backgroundColor = 'orangered';
    });

    re[k].addEventListener('mouseleave', function () {
        this.style.backgroundColor = 'rgb(155, 82, 82)';
    });


    re[k].addEventListener('mousedown', function () {
        this.style.boxShadow = "1px 1px 1px 1px  gray"
    });


    re[k].addEventListener('mouseup', function () {
        this.style.boxShadow = "0px 0px 0px 0px  white"
    });
}
//input-box

operand1 = 0;
operand2 = null;
operator = null;
function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}
for (var i = 0; i < wh.length; i++) {
    wh[i].addEventListener('click', function () {
        var value = this.firstElementChild.attributes[1].nodeValue;
        console.log(value);
        if (value == 'AC') {
            display.textContent = '';
        } else if (value == '+/-') {
            display.textContent *= -1;
        }
        else {
            display.textContent += value;
        }
    });
}

for (var j = 0; j < re.length; j++) {
    re[j].addEventListener('click', function () {
        var value = this.firstElementChild.attributes[1].nodeValue;
        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(display.textContent.trim());
            display.textContent = '';
        } else if (value == '=') {
            operand2 = parseFloat(display.textContent.trim());
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }
    });
}

