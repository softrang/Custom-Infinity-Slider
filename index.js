var slider = document.querySelectorAll('.slide');
var goNext = document.getElementById('next');
var goPrev = document.getElementById('prev');



function moveItems() {
    var item1 = document.querySelector('.item-1 img');
    var item2 = document.querySelector('.item-2 img');
    var item3 = document.querySelector('.item-3 img');
    var item4 = document.querySelector('.item-4 img');
    var item5 = document.querySelector('.item-5 img');
    var item6 = document.querySelector('.item-6 img');
    var item7 = document.querySelector('.item-7 img');
    var item8 = document.querySelector('.item-8 img');
    var item9 = document.querySelector('.item-9 img');
    var item10 = document.querySelector('.item-10 img');
    var item11 = document.querySelector('.item-11 img');
    
    var item12 = document.querySelector('.item-12 img');
    


    if (item1) item1.parentElement.classList.replace('item-1', 'temp-item');
    if (item2) item2.parentElement.classList.replace('item-2', 'item-1');
    if (item3) item3.parentElement.classList.replace('item-3', 'item-2');
    if (item4) item4.parentElement.classList.replace('item-4', 'item-3');
    if (item5) item5.parentElement.classList.replace('item-5', 'item-4');
    if (item6) item6.parentElement.classList.replace('item-6', 'item-5');
    if (item7) item7.parentElement.classList.replace('item-7', 'item-6');
    if (item8) item8.parentElement.classList.replace('item-8', 'item-7');
    if (item9) item9.parentElement.classList.replace('item-9', 'item-8');
    if (item10) item10.parentElement.classList.replace('item-10', 'item-9');
    if (item11) item11.parentElement.classList.replace('item-11', 'item-10');
    if (item12) item12.parentElement.classList.replace('item-12', 'item-11');
    if (document.querySelector('.temp-item')) document.querySelector('.temp-item').classList.replace('temp-item', 'item-12');
}

goNext.addEventListener('click', moveItems);


setInterval(moveItems, 3000);



function moveItemss() {
    var item1 = document.querySelector('.item-1 img');
    var item2 = document.querySelector('.item-2 img');
    var item3 = document.querySelector('.item-3 img');
    var item4 = document.querySelector('.item-4 img');
    var item5 = document.querySelector('.item-5 img');
    var item6 = document.querySelector('.item-6 img');
    var item7 = document.querySelector('.item-7 img');
    var item8 = document.querySelector('.item-8 img');
    var item9 = document.querySelector('.item-9 img');
    var item10 = document.querySelector('.item-10 img');
    var item11 = document.querySelector('.item-11 img');
    var item12 = document.querySelector('.item-12 img');

    if (item1) item1.parentElement.classList.replace('item-1', 'item-2');
    if (item2) item2.parentElement.classList.replace('item-2', 'item-3');
    if (item3) item3.parentElement.classList.replace('item-3', 'item-4');
    if (item4) item4.parentElement.classList.replace('item-4', 'item-5');
    if (item5) item5.parentElement.classList.replace('item-5', 'item-6');
    if (item6) item6.parentElement.classList.replace('item-6', 'temp-7');
    if (item7) item7.parentElement.classList.replace('item-7', 'item-8');
    if (item8) item8.parentElement.classList.replace('item-8', 'item-9');
    if (item9) item9.parentElement.classList.replace('item-9', 'item-10');
    if (item10) item10.parentElement.classList.replace('item-10', 'item-11');
    if (item11) item11.parentElement.classList.replace('item-11', 'temp-item');
    if (item12) item12.parentElement.classList.replace('item-12', 'item-1');
    if (document.querySelector('.temp-item')) document.querySelector('.temp-item').classList.replace('temp-item', 'item-12');
}

goPrev.addEventListener('click', moveItemss);



















