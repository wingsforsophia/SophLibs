/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const printHere = document.getElementById('print-here')
const getLibButton = document.getElementById('getLib')
const forms = document.querySelectorAll('.forms')
const getNum = document.getElementById('getNum')
/*----------------------------- Event Listeners -----------------------------*/

getLibButton.addEventListener('click', getLib)


/*-------------------------------- Functions --------------------------------*/


function  getLib() {
    let l1ProperNoun1 = document.getElementById("l1-properNoun1").value

    let l1Number1 = document.getElementById("l1-number1").value
   

    forms.forEach(form => form = form.setAttribute("style", "display: none"))


    getLibButton.setAttribute("style", "display: none")


    printHere.innerHTML = `${l1ProperNoun1}, who has broken more than ${l1Number1} Guinness records to promote STEM education, said his recent experiences with mouth-catching records, including one for using his mouth to bounce a table tennis ball off a wall, inspired him to try to set the record for most candy-coated corn caught in the mouth by an individual in one minute (self-thrown). He caught 50 sweet little kernels. `

  }



console.log(forms)