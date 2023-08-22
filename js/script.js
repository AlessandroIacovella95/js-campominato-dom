//* Creo una funzione per generare una cella
function generateCell() {
    const cell = document.createElement('li');
    const bombIcon = document.createElement('i');
    //* Classe Font Awesome per l'icona della bomba
    bombIcon.classList.add('fas', 'fa-bomb');
    //* Imposto la dimensione della bomba
    const iconSize = 20;
    bombIcon.style.fontSize = `${iconSize}px`
    cell.className = 'cell';
    //* Evento al click sulla cella
    cell.addEventListener('click', function () {
        if (gameOver) return;
        let cellNumber = parseInt (cell.innerHTML);
        if (numbers.includes(cellNumber)) {
            cell.innerHTML = '';
            cell.style.backgroundColor = 'red';
            cell.append(bombIcon);
            alert('Partita terminata, premi play per riniziare la partita')
            scoreResult.innerHTML = 'Hai perso, Riprova'
            gameOver = true;
        } else {
            cell.classList.add('color_cells', 'no-event');
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

//* Recupero l'elemento button
const button = document.getElementById('button');

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
        const cell = generateCell();
        grid.appendChild(cell);
        cell.innerHTML = i;
    }
})