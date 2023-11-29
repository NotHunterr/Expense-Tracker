let formQuestions = document.getElementById('form_questions')
let monthlyDiv = document.querySelector('.monthly_div')
let yearlyDiv = document.querySelector('.yearly_div')

formQuestions.addEventListener('submit', (event) => {
  event.preventDefault()
  let monthlyIncome = document.getElementById('monthly_income').value
  console.log(monthlyIncome)
})

let showMonthly = () => {
  monthlyDiv.style.display = 'block'
  yearlyDiv.style.display = 'none'
}

let showYearly = () => {
  monthlyDiv.style.display = 'none'
  yearlyDiv.style.display = 'block'
}
