let formQuestions = document.getElementById('form_questions')
let monthlyDiv = document.querySelector('.monthly_div')
let yearlyDiv = document.querySelector('.yearly_div')

formQuestions.addEventListener('submit', (e) => {
  e.preventDefault()
  let monthlyIncome = document.getElementById('show_monthly_income').value
  console.log(monthlyIncome)
})

yearlyDiv.addEventListener('submit', (e) => {
  e.preventDefault()
  let yearlyIncome = document.getElementById('show_yearly_income').value
  console.log(yearlyIncome)
  monthlyIncome = yearlyIncome / 12
})

/* Showing and hiding the showing/monthly income option when opposite
 button is pressed. */
let showMonthly = () => {
  monthlyDiv.style.display = 'block'
  yearlyDiv.style.display = 'none'
}

let showYearly = () => {
  monthlyDiv.style.display = 'none'
  yearlyDiv.style.display = 'block'
}

const numOfDebts = document.querySelector('.debt-questions')
const getNewDebts = document.querySelector('.num-of-debts')
let debtArr = []

const fnAddDebt = () => {
  const debtContainer = document.createElement('div')
  debtContainer.classList.add('debt-container')
  addText = document.querySelector('.debt-container')
  addText.innerHTML += 'Hello'
}
