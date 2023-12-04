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
const getNewDebts = document.querySelector('.num-of-debts-container')

debtSubmit = document.getElementById('submit-btn')
let debtObj = []
let debtNum = 1

debtSubmit.addEventListener('click', (e) => {
  e.preventDefault()
  let debtAmountValue = document.getElementById('debt-amount').value
  let interestAmountValue = document.getElementById('interest-amount').value
  let mmpAmountValue = document.getElementById('min-monthly-payment').value
  /////// Need to do this because I want to reset input fields :/
  let debtAmountInput = document.getElementById('debt-amount')
  let interestAmountInput = document.getElementById('interest-amount')
  let mmpAmountInput = document.getElementById('min-monthly-payment')

  // Creating a new object that stores the debt values submitted
  let newDebtObject = {
    debt: debtAmountValue,
    interest: interestAmountValue,
    mmp: mmpAmountValue,
  }

  // Pushing the newly created object into a string
  debtObj.push(newDebtObject)
  console.log(debtObj)

  // Resetting input fields for a second debt.
  debtAmountInput.value = ''
  interestAmountInput.value = ''
  mmpAmountInput.value = ''

  // Alerting users that the input has been successful
  if (debtNum == 1) {
    alert('You have inserted a debt. If you have more, please keep inputting.')
    debtNum++
  } else {
    alert(
      `You have inserted ${debtNum} total debts. If you have more, please keep inputting.`
    )
    debtNum++
  }

  //Display current objects as a test!

  /* TO MAKE THIS HAPPEN
    - LOOP THROUGH THE ARRAY OF THE OBJECTS
    - DISPLAY THE OBJECTS IN THE ARRAY.  */
})

// let's create a function to do this!
