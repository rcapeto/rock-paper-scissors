const btnPlay = document.querySelector('#play-game');
const player = document.querySelector('.input-player input');
const options = ['PEDRA', 'PAPEL', 'TESOURA'];
const results = document.querySelector('.results');
const pMessage = document.querySelector('.button-play p');


function formatInput(value, e) {
   if(value  === '0' || value === '1' || value === '2') {
      if(value === '0') value = 'PEDRA';
      if(value === '1') value = 'PAPEL';
      if(value === '2') value = 'TESOURA';

   } else {
      value = '';
   }

   if(e.key === 'Backspace') value = '';

   return value;
}

function playGame() {
   results.className = 'results';
   results.innerHTML = '';
   pMessage.classList.remove('alert');
   
   if(player.value === '') {
      pMessage.innerHTML = 'Por favor selecione uma opção :)';
      pMessage.classList.add('alert');
      return;
   }

   pMessage.innerHTML = 'Carregando...';

   const playerOption = player.value;

   btnPlay.disabled = true;

   player.value = '';

   let message = '';
   let addClass = ''

   const computer = options[Math.floor(Math.random() *options.length)];

   switch(computer) {
      case 'PEDRA':
         if(playerOption === 'PEDRA') {
             message = layoutMessage('EMPATE', computer, playerOption);
             addClass = 'draw';
         }

         if(playerOption === 'PAPEL') {
            message = layoutMessage('VOCÊ VENCEU', computer, playerOption);
            addClass = 'success';
         }

         if(playerOption === 'TESOURA') {
            message = layoutMessage('COMPUTADOR VENCEU', computer, playerOption);
            addClass = 'fail';
         }
         break;
      case 'PAPEL':
         if(playerOption === 'PAPEL') {
            message = layoutMessage('EMPATE', computer, playerOption);
            addClass = 'draw';
         }

         if(playerOption === 'TESOURA') {
           message = layoutMessage('VOCÊ VENCEU', computer, playerOption);
           addClass = 'success';
         }

         if(playerOption === 'PEDRA') {
           message = layoutMessage('COMPUTADOR VENCEU', computer, playerOption);
           addClass = 'fail';
         }
         break;
      case 'TESOURA':
         if(playerOption === 'TESOURA') {
            message = layoutMessage('EMPATE', computer, playerOption);
            addClass = 'draw';
         }

         if(playerOption === 'PEDRA') {
           message = layoutMessage('VOCÊ VENCEU', computer, playerOption);
           addClass = 'success';
         }

         if(playerOption === 'PAPEL') {
           message = layoutMessage('COMPUTADOR VENCEU', computer, playerOption);
           addClass = 'fail';
         }
         break;
   }



   setTimeout(() => {
      pMessage.innerHTML = '';
      btnPlay.disabled = false;

      results.classList.add(addClass);
      results.appendChild(message);

   }, 2000);

}

function layoutMessage(message, computerValue, playerValue) {
   const div = document.createElement('div');

   div.innerHTML = `
      <h4>${message}!</h4>
      <p>O computador jogou <span>${computerValue}</span></p>
      <p>O jogar jogou <span>${playerValue}</span></p>
   `;

   return div;
}

player.addEventListener('keydown', e => {
   setTimeout(() => e.target.value = formatInput(e.target.value, e));
});

btnPlay.addEventListener('click', playGame);


document.querySelector('.fa-github').addEventListener('click', () => {
   window.open('https://github.com/rcapeto');
});

document.querySelector('.fa-instagram').addEventListener('click', () => {
   window.open('https://www.instagram.com/raphacapeto/');
});

document.querySelector('.fa-linkedin').addEventListener('click', () => {
   window.open('https://www.linkedin.com/in/raphael-capeto-07364a1a2/');
});