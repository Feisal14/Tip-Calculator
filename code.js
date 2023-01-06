

const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

    numberOfPeople = Number(numberOfPeopleDiv.innerText)




const calculateBill = () => {
    const bill = Number(billInput.value);
    const tipPercantage = Number(tipInput.value) / 100
    const tipAmount =   bill * tipPercantage
    const total = bill + tipAmount
 
let perPersonTotal = total / numberOfPeople


perPersonTotalDiv.innerText =  `$${perPersonTotal.toFixed(2)}`

}


const increasePeople = () => {

    numberOfPeople +=1;
  
    numberOfPeopleDiv.innerText = numberOfPeople 

  

  calculateBill();
 
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  if(numberOfPeople <= 1) return;

    numberOfPeople -= 1;
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill();

}