console.log('qfocs ??');

mailBtn = document.querySelector('#mailBtn');
cvBtn = document.querySelector('#cvBtn');
linkedinBtn = document.querySelector('#linkedinBtn');

mailBtn.addEventListener('click', ()=>{
    window.open('mailto:ol.maignan@gmail.com');
})

cvBtn.addEventListener('click', ()=>{
    window.open('./img/OlivierMaignan.pdf', '_blank');
})

linkedinBtn.addEventListener('click', ()=>{
    window.open('https://www.linkedin.com/in/olivier-maignan/', '_blank');
})