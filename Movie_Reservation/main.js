// Image Box Change
// Select option에서 e.target.value는 바로 읽어지는데 dataset은 안됨..?
const imagebox = document.querySelector('.imagebox');
const movielist = document.querySelector('#movielist');
let value;
let selectedMoviePrice
let pickseat;
let init = true; // 맨 처음에 좌석 선택 방지용

movielist.addEventListener('change', (e) => {
    init = false;
    const seat = document.querySelectorAll('.seat');
    pickseat = 0;
    people.value = null;
    num.innerHTML = 0;
    price.innerHTML = 0;
    for(let i = 0; i < seat.length; i++) { // 영화 바뀌면 자리 초기화
        seat[i].classList.remove('selected');
    }

    value = e.target.value; // option value

    const idx = e.target.options.selectedIndex;
    console.log(value);
    selectedMoviePrice = e.target.options[idx].dataset.price; // data-price

    const url = 'url(./image/' + value + '.jpg)';
    imagebox.style.backgroundImage = url;
    if(value === 'default') {
        imagebox.style.height = '100%';
    }
    else {
        imagebox.style.height = '90%';
    }
})

// Selected Seat

const seats = document.querySelector('.seats');
const price = document.querySelector('.price');
const num = document.querySelector('.num');

seats.addEventListener('click', (e) => {
    const target = e.target;
    if(value === 'default' || init === true) {
        return;
    }

    if(!(e.path[0].classList.contains('seat'))) { // margin 부분 클릭 방지
        
        return;
    }

    if(target.classList.contains('seat__occupied')) { // 이미 차지한 자리 선택 방지
        alert("Already Selected!")
        return;
    }

    if(!(target.classList.contains('selected')) && peopleNum <= pickseat) {
        alert("More than number of reservation!");
        return;
    }

    if(target.classList.contains('selected')) {
        target.classList.remove('selected');
        pickseat--;
    }
    else {
        target.classList.add('selected');
        pickseat++;
    }

    
    console.log(selectedMoviePrice);
    num.innerHTML = pickseat;
    price.innerHTML = pickseat * selectedMoviePrice;
})

// input 값 가져오기
const people = document.querySelector('.people');
let peopleNum;
people.addEventListener('change', (e)=> {
    peopleNum = people.value;
})