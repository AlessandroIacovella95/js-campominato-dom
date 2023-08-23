//* Creo una funzione per generare una cella
function generateCell(i) {
    const cell = document.createElement('li');
    cell.setAttribute('data-index', i)
    const bombIcon = document.createElement('i');
    //* Classe Font Awesome per l'icona della bomba
    cell.className = 'cell';
    bombIcon.classList.add('fas', 'fa-bomb');
    //* Imposto la dimensione della bomba
    const iconSize = 20;
    bombIcon.style.fontSize = `${iconSize}px`
    bombIcon.style.color = 'white'
    //* Evento al click sulla cella
    cell.addEventListener('click', function () {
        if (gameOver) return;
        let cellNumber = parseInt (cell.getAttribute('data-index'));
        cell.innerText = cellNumber;
        if (numbers.includes(cellNumber)) {
            cell.innerHTML = '';
            cell.classList.add('color_bomb')
            cell.append(bombIcon);
            alert('Partita terminata. Il tuo punteggio é: ' + `${userResult}`)
            scoreResult.innerHTML = 'BOOM!!! Hai perso, Riprova'
            gameOver = true;
        } else {
            cell.classList.add('color_cells');
            userResult += 1;
            score.innerHTML = `${userResult}`;
        }
        
        if (userResult == (totalCells - numbers.length)){
            alert ('HAI VINTO ' + `Il punteggio e' ` + (totalCells - numbers.length));
            scoreResult.innerHTML = ('Complimenti hai vinto!!!');
            gameOver = true;
        }
    });
    return cell;
}

//* Creo Funzione per generare numeri casuali
function generateRandomNumbers(max, count) {
    const randomNumbers = [];
    while (randomNumbers.length < count) {
        let randomNumber = Math.floor(Math.random() * max) + 1;
        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
}    

//* Recupero dal DOM gli elementi di interesse

//* Recupero l'elemento grid
const grid = document.getElementById('grid');

//* Recupero l'elemento score
const score = document.getElementById('score-point');

//* Recupero l'elemento user-score
const scoreResult = document.getElementById('user-score');

let userResult = 0;

let gameOver = false;


//* Numero delle celle totali
const rows = 10;
const cells = 10;
const totalCells = rows * cells;

//* Evento button per generare la griglia al click
button.addEventListener('click', function() {
    gameOver = false;
    grid.innerHTML = "";
    score.innerHTML = 0;
    scoreResult.innerHTML = ''
    userResult = 0
    numbers = generateRandomNumbers(totalCells, 16);

    
    //* Ciclo FOR
    for (let i = 1; i <= totalCells; i++) {
        const cell = generateCell(i);
        grid.appendChild(cell);
    }
})
