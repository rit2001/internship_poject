const puzzleBoard=document.querySelector('#puzzle')
const solveButton=document.querySelector('solve-button')

const solutionDisplay=document.querySelector('#solution')
const squares=81

for(var i=0;i<squares;i++)
{
   const inputElement=document.createElement('input')
   inputElement.setAttribute('type','number')
   inputElement.setAttribute('min',1)
   inputElement.setAttribute('max',9)

   if (
    ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i < 21) ||
    ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i < 27) ||
    ((i % 9 == 3 || i % 9 == 4 || i % 9 == 5) && (i > 27 && i < 53)) ||
    ((i % 9 == 0 || i % 9 == 1 || i % 9 == 2) && i > 53) ||
    ((i % 9 == 6 || i % 9 == 7 || i % 9 == 8) && i > 53)
  ) 
    {
      inputElement.classList.add('odd-section')
    }

   puzzleBoard.appendChild(inputElement)

}

const joinValues = () => {
  const inputs = document.querySelectorAll('input')
  inputs.forEach(input => {
    if (input.value) {
      submission.push(input.value)
    } else {
      submission.push('.')
    }
  })
  console.log(submission.join(''))
}

const populateValues = (isSolvable,solution) => {

  const inputs = document.querySelector('input')
   if(isSolvable && solution)
   {
    inputs.forEach((input,i) => {
      input.value=solution[i]
    })
    solutionDisplay.innerHTML='This is the answer'

   }else {
     solutionDisplay.innerHTML='This not solvable'
   }
    
}

const solve = async() => {
  const axios = require('axios');

  const options = {
    method: 'POST',
    url: 'https://solve-sudoku.p.rapidapi.com/',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'ada9c42dccmsh5f0d2c06e833446p186440jsn759d9b0c8b8c',
      'X-RapidAPI-Host': 'solve-sudoku.p.rapidapi.com'
    },
    data: {
      puzzle: '2.............62....1....7...6..8...3...9...7...6..4...4....8....52.............3'
    }
  };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

solveButton.addEventListener('click',solve)