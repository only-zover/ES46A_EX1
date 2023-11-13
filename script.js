const name = document.querySelector('.name')
const n1 = document.querySelector('.n1')
const n2 = document.querySelector('.n2')
const n3 = document.querySelector('.n3')
const med = document.querySelector('.med')
const listOL = document.querySelector('.list')
const result = document.querySelector('.result')
const calcBtn = document.querySelector(".calc-bt")

calcBtn.addEventListener('click', ()=> {
    let n = name.value;
    let num1 = Number(n1.value);
    let num2 = Number(n2.value);
    let num3 = Number(n3.value);
    let m = Number(med.value);
    let mf = (num1 + num2 * 2 + num3 * 3 + m)/7;

    let data = JSON.parse(localStorage.getItem('avgData')) || [];
    data.push({ n, mf });
    localStorage.setItem('avgData', JSON.stringify(data));

    result.innerText=`${n} suas notas são:
    Nota 1: ${num1}
    Nota 2: ${num2}
    Nota 3: ${num3}
    Média de Exercícios: ${m}

    Média final: ${mf.toFixed(2)}`

    listData()
})

function listData() {
    let data = JSON.parse(localStorage.getItem('avgData')) || [];

    data.forEach((data) => {
        let list = document.createElement('li');
        list.textContent = `Nome: ${data.n}, Média Final: ${data.mf.toFixed(2)}`;

        // Adiciona o item de lista à lista ordenada
        listOL.appendChild(list);
    })
}

window.onload(listData())