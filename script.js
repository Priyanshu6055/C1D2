let count = 0;


const countDisplay = document.getElementById('count');
const decreseCnt = document.getElementById('decrese');
const increseCnt = document.getElementById('increse');
const resetBtn = document.getElementById('reset');


decreseCnt.addEventListener('click', function(){
    count--;
    countDisplay.textContent = count;
});

increseCnt.addEventListener('click', function(){
    count++;
    countDisplay.textContent = count;
});

resetBtn.addEventListener('click', function(){
    count = 0;
    countDisplay.textContent = count;
});