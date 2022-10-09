const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPostiton
let currentTime = 60

function randomSquare(){
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')
    
    hitPostiton = randomPosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPostiton) {
            result++
            score.textContent = result
            hitPostiton = null
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSquare, 500)
}

moveMole()


function countDown(){
    currentTime--

    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        alert('Game over! Your final score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)