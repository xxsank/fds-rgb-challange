function randomNumber(){
  return Math.floor(256 * Math.random());
}

function randomColorCode(){
  return `rgb(${randomNumber()},${randomNumber()},${randomNumber()})`;
}

const colorCodeEl = document.querySelector('.color-code');
const boxes = document.querySelectorAll('.box');


let correctAnswer;
let score = 0;
document.querySelector('.score').textContent = `score : ${score}`;

function newStage(){
  const colorCodes = [randomColorCode(),randomColorCode(),randomColorCode()]; 
  boxes.forEach((el,index) =>{ 
    el.style.backgroundColor = colorCodes[index];
  });
  correctAnswer = Math.floor(Math.random() * 3);
  colorCodeEl.textContent = colorCodes[correctAnswer];
}



boxes.forEach((el,index) => {
  el.addEventListener('click', ()=>{
    el.classList.add('large');
    if(correctAnswer === index){
      document.querySelector('.modal.right').classList.add('show');
      score++;
    } else{
      document.querySelector('.modal.wrong').classList.add('show');
      document.querySelector('.inscore').textContent = `score : ${score}`;
      score = 0;
    }
    document.querySelector('.score').textContent = `score : ${score}`;    
  });
});

document.querySelector('.modal.right .close').addEventListener('click', () => {
  newStage();  
  boxes.forEach(el => {
    el.classList.remove('large');
  })
  document.querySelector('.modal.right').classList.remove('show');
})

document.querySelector('.modal.wrong .close').addEventListener('click', () => {
  newStage();  
  boxes.forEach(el => {
    el.classList.remove('large');
  })
  document.querySelector('.modal.wrong').classList.remove('show');
})

newStage();
