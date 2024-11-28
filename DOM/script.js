const area = document.querySelectorAll('div');

for (let i = 0; i < area.length; i++) {
    area[i].style.backgroundColor = '#4f4e4d';
    area[i].style.color = "white";
}

const section = document.querySelector('section');
const a = section.querySelector('a');
a.style.color = "cyan";

a.setAttribute('href', 'https://akmalblog.pythonanywhere.com');

const li = document.querySelectorAll('li');

for (let i = 0; i < li.length; i++) {
    li[i].style.backgroundColor = '#21201e';
    li[i].innerHTML = 'LETS ALL LOVE LAIN';
    li[i].style.fontSize = '30px';
    li[i].style.color = "white";
}
