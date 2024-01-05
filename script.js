const choices = ['rock', 'paper', 'scissors']
const buttons = document.querySelectorAll('button')
const yourChoiceLabel = document.getElementById('yourChoice')
const computerChoiceLabel = document.getElementById('computerChoice')
const resultLabel = document.getElementById('result')

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const yourChoice = button.dataset.value
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    yourChoiceLabel.innerHTML = yourChoice
    computerChoiceLabel.innerHTML = computerChoice
    let result = ''
    if (yourChoice === computerChoice) {
      result = 'Tie'
    } else if (yourChoice === 'rock' && computerChoice === 'scissors') {
      result = 'You win'
    } else if (yourChoice === 'scissors' && computerChoice === 'paper') {
      result = 'You win'
    } else if (yourChoice === 'paper' && computerChoice === 'rock') {
      result = 'You win'
    } else {
      result = 'You lose'
    }
    resultLabel.innerHTML = result
    let resultClass = ''
    if (result === 'You win') {
      resultClass = 'winner'
    } else if (result === 'You lose') {
      resultClass = 'loser'
    } else {
      resultClass = 'tie'
    }
    resultLabel.classList.add(resultClass)

    setTimeout(() => {
      resultLabel.classList.remove(resultClass)
    }, 400)
  })
})
