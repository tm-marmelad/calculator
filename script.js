
const colorParts = ["333", "333", "b3"];
const cloudPath = document.querySelector('#cloud-path');
const textElement = document.querySelector('.text');
const colorBoxRed = document.getElementById("color-red");
const colorBoxGreen = document.getElementById("color-green");
const colorBoxBlue = document.getElementById("color-blue");
const wrapperElement = document.getElementById("wrapper");
const colorBoxes = [colorBoxRed, colorBoxGreen, colorBoxBlue];

function colorChange() {
    let newColor = "#" + colorParts[0] + colorParts[1] + colorParts[2];
    cloudPath.style.fill = newColor;
    textElement.innerHTML = newColor;
}

colorChange();

wrapperElement.addEventListener('click', (event) => {
    const clickedElement = event.target;
    const currentClass = clickedElement.className;
    if (currentClass == 'control') {
        removeActiveClasses(clickedElement.dataset.index);
        clickedElement.classList.add("active");
        colorParts[clickedElement.dataset.index] = clickedElement.textContent;
        colorChange();
    };
});


function removeActiveClasses(index) {
    const elements = colorBoxes[index].querySelectorAll('.active')
    elements.forEach((item) => {
        item.classList.remove('active');
    })
}

// вешаем прослушку по всем элементам массива
const headers = document.querySelectorAll("[data-name = 'accordeon-title']");
console.log(headers);
// вешаем clic на каждый элемент
headers.forEach(function (item) {
    console.log(item);
    // находим следующий элемент и добовл. или убираем класс hidden 
    item.addEventListener('click', function () {
        console.log(this);
        console.log(this.nextElementSibling);
        this.nextElementSibling.classList.toggle('hidden');
    })     
});

let a ='';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3','4', '5', '6', '7', '8', '9',','];
const action = ['-', '+', '*', '/', '%', '+/-'];
const out = document.querySelector('.calk-screen')

function clearAll () {
    a = '';
    b = '';
    sign = '';
    finish = false;
    out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('ac')) return;

    out.textContent = '';
    const key = event.target.textContent;

    if(digit.includes(key)) {
        if(b ==='' && sign === '') {
            a += key;
            finish = false;
            out.textContent = a;           
        }
        else if(a!=='' && b!=='' && finish) {
            b = key;
            finish = false;
            out.textContent = b;        }
        else {
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;       
    }

    if(action.includes(key)) {
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

    if(key === '=') {
        if(b ==='') b = a;
        switch (sign) {
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if(b === '0') {
                    out.textContent = 'НЕ гони';
                    a = '';
                    b = '';
                    sign = '';
                    return;
                }
                a = a / b;
                break;
            case "%":
                    a = a / 100;
                    
                    
                    break;
        }

        finish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }

};



(function () {
	let rotateY = 0,
		rotateX = 0;

	document.onkeydown = function (e) {
			 if (e.keyCode === 37) rotateY -= 4
		else if (e.keyCode === 38) rotateX += 4
		else if (e.keyCode === 39) rotateY += 4
		else if (e.keyCode === 40) rotateX -= 4

		document.querySelector('.cube').style.transform = 
      'rotateY(' + rotateY + 'deg)'+ 'rotateX(' + rotateX + 'deg)';
      
    }
})();