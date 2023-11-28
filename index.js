let formQuestions = document.getElementById('form_questions')

formQuestions.addEventListener('submit', (event) => {
  event.preventDefault()
  let monthlyIncome = document.getElementById('monthly_income').value
  console.log(monthlyIncome)
})

let showMonthly = () => {
  let monthlyInput = document.getElementById('show_monthly')
  monthlyInput.style.display = 'block'
}
