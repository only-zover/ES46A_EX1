const name = document.querySelector('.name')
const n1 = document.querySelector('.n1')
const n2 = document.querySelector('.n2')
const n3 = document.querySelector('.n3')
const med = document.querySelector('.med')
const listOL = document.querySelector('.list')
const result = document.querySelector('.result')
const calcBtn = document.querySelector(".calc-bt")

window.addEventListener('load', listAvarageData)
calcBtn.addEventListener('click', ()=> {
    let n = name.value
    let num1 = Number(n1.value)
    let num2 = Number(n2.value)
    let num3 = Number(n3.value)
    let m = Number(med.value)
    let mf = (num1 + num2 * 2 + num3 * 3 + m) / 7

    setAvarageData(n, mf)

    result.innerText=`${n} suas notas são:
    Nota 1: ${num1}
    Nota 2: ${num2}
    Nota 3: ${num3}
    Média de Exercícios: ${m}

    Média final: ${mf.toFixed(2)}`

    listAvarageData()
})

function setAvarageData(n, mf) {
    let data = JSON.parse(localStorage.getItem('avgData')) || [];
    data.push({ n, mf });
    localStorage.setItem('avgData', JSON.stringify(data));
}

function listAvarageData() {
    let data = JSON.parse(localStorage.getItem('avgData')) || [];

    listOL.innerHTML = ''

    data.forEach((data) => {
        let list = document.createElement('li');
        list.innerHTML = `<b>${data.n} - Média Final: ${data.mf.toFixed(2)}</b>`;

        listOL.appendChild(list);
    })
}