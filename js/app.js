/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const printHere = document.getElementById('print-here')
const getLibButton = document.getElementById('getLib')
const forms = document.querySelectorAll('.forms')

/*----------------------------- Event Listeners -----------------------------*/

getLibButton.addEventListener('click', getLib1)


/*-------------------------------- Functions --------------------------------*/


function  getLib1() {
    let l1properNoun1 = document.getElementById("l1-properNoun1").value
    let l1number1 = document.getElementById("l1-number1").value
    let l1fourLetterWord = document.getElementById('l1-fourLetterWord').value.toUpperCase()
    let l1identifier1 = document.getElementById('l1-identifier1').value
    let l1bodyPart1 = document.getElementById('l1-bodyPart1').value.toLowerCase()
    let l1identifier2 = document.getElementById('l1-identifier2').value
    let l1sportball1 = document.getElementById('l1-sportball1').value
    let l1identifier3 = document.getElementById('l1-identifier3').value
    let l1food1 = document.getElementById('l1-food1').value.toLowerCase()
    let l1number2 = document.getElementById('l1-number2').value
   


    forms.forEach(form => form = form.setAttribute("style", "display: none"))
    getLibButton.setAttribute("style", "display: none")


    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    


    printHere.innerHTML = `${capitalizeFirstLetter(l1properNoun1)}, who has broken more than ${l1number1} Guinness records to promote ${l1fourLetterWord} education, said ${l1identifier1} recent experiences with ${l1bodyPart1}-catching records, including one for using ${l1identifier2} ${l1bodyPart1} to bounce a ${l1sportball1} off a wall, inspired ${l1identifier3} to try to set the record for most ${l1food1} caught in the ${l1bodyPart1} by an individual in ${l1number2} minute(s), self-thrown.`

  }


 

