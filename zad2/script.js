const plusButton = document.querySelector("button.plus");
const zmienKolorButton = document.querySelector("button.zmienKolor");
const liczba = document.querySelector("div.liczba");
var licznik = 0;

plusButton.addEventListener('click', ()=>{
    licznik++;
    liczba.innerText=licznik;
});
zmienKolorButton.addEventListener('click', ()=>{
    console.log(liczba.style.color);
    if(liczba.style.color=="red") liczba.style.color = 'black';
    else liczba.style.color = 'red';
});

