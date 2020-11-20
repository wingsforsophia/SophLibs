/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const printHere = document.getElementById('print-here')
const getLibButton = document.getElementById('getLib')
const forms = document.querySelectorAll('.forms')

/*----------------------------- Event Listeners -----------------------------*/

getLibButton.addEventListener('click', getLib1)


/*-------------------------------- Functions --------------------------------*/


function  getLib1() {
    let l1ProperNoun1 = document.getElementById("l1-properNoun1").value
    let l1Number1 = document.getElementById("l1-number1").value
    let l1FourLetterWord = document.getElementById('l1-fourLetterWord').value.toUpperCase()
    let identifier1 = document.getElementById('l1-identifier1').value;


    forms.forEach(form => form = form.setAttribute("style", "display: none"))
    getLibButton.setAttribute("style", "display: none")


    printHere.innerHTML = `${l1ProperNoun1}, who has broken more than ${l1Number1} Guinness records to promote ${l1FourLetterWord} education, said ${identifier1} recent experiences with mouth-catching records, including one for using his mouth to bounce a table tennis ball off a wall, inspired him to try to set the record for most candy-coated corn caught in the mouth by an individual in one minute (self-thrown). He caught 50 sweet little kernels. `

  }




