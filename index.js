let formQuestions = document.getElementById('form_questions')

formQuestions.addEventListener('submit', (event) => {
  event.preventDefault()
  let monthlyIncome = document.getElementById('monthly_income').value
  console.log(monthlyIncome)
})
