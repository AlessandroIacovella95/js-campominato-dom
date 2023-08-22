# Esercizio di oggi: Campo Minato

## Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba.

## BONUS:
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
- difficoltà 1 ⇒ 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
- difficoltà 2 ⇒ 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
- difficoltà 3 ⇒ 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

## Svolgimento
- Recupero dal DOM gli elementi di interesse
  - Recupero l'elemento grid
  - Recupero l'elemento button
  - Recupero l'elemento score-point
  - Recupero l'elemento user-score
- dichiaro la variabile userResult
- Dichiaro la variabile gameOver
- Dichiaro tramite const il numero totale delle celle della griglia
- Creo una funzione per generare una cella e l'evento al click delle cella stessa
- Aggiungo l'icona delle bombe alle celle indicate come tali
- in base se vengono rispettate le condizioni tramite **IF**
    - La cella si colora di rosso se è una bomba e finisce il gioco
    **ALTRIMENTI** la cella si colora di azzurro e il gioco continua
- Creo una funzione che genere 16 bombe posizionate casualmente all'interno delle celle che compongono la griglia
- Creo un addEventListener per generare la griglia al click del button
  - Ciclo **FOR** per generare un numero pari di celle uguale alla variabile totalCells
- Stampo in console il numero della cella cliccata

