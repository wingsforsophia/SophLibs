
/*------------------------ Cached Element References ------------------------*/
// const l1printHere = document.getElementById('l1-print-here')
// const getLib1Button = document.getElementById('getLib1')
// const nextButton1 = document.getElementById('nextLib1')
const forms = document.querySelectorAll('.forms')
const lib1Start = document.getElementById('lib1')
const lib2Start = document.getElementById('lib2')
const lib3Start = document.getElementById('lib3')




/*----------------------------- Event Listeners -----------------------------*/

// getLib1Button.addEventListener('click', getLib1)
// nextButton1.addEventListener('click', nextLib1)

lib1Start.addEventListener('click', ()=>{
  console.log("this works1")
  myFunction()
})

lib2Start.addEventListener('click', ()=>{
  console.log("this works2")
})

lib3Start.addEventListener('click', ()=>{
  console.log("this works3")
})


/*-------------------------------- Functions --------------------------------*/


function myFunction() {
  var x = document.getElementById("firstLib");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
} 



// function  getLib1() {
//     let l1properNoun1 = document.getElementById("l1-properNoun1").value
//     let l1number1 = document.getElementById("l1-number1").value
//     let l1fourLetterWord = document.getElementById('l1-fourLetterWord').value.toUpperCase()
//     let l1identifier1 = document.getElementById('l1-identifier1').value
//     let l1bodyPart1 = document.getElementById('l1-bodyPart1').value.toLowerCase()
//     let l1identifier2 = document.getElementById('l1-identifier2').value
//     let l1sportball1 = document.getElementById('l1-sportball1').value
//     let l1identifier3 = document.getElementById('l1-identifier3').value
//     let l1food1 = document.getElementById('l1-food1').value.toLowerCase()
//     let l1number2 = document.getElementById('l1-number2').value
   


//     forms.forEach(form => form = form.setAttribute("style", "display: none"))
//     getLib1Button.setAttribute("style", "display: none")
//     nextButton1.setAttribute('style', 'display: grid')

//     function capitalizeFirstLetter(string) {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//     }
    


//     l1printHere.innerHTML = `${capitalizeFirstLetter(l1properNoun1)}, who has broken more than ${l1number1} Guinness records to promote ${l1fourLetterWord} education, said ${l1identifier1} recent experiences with ${l1bodyPart1}-catching records, including one for using ${l1identifier2} ${l1bodyPart1} to bounce a ${l1sportball1} off a wall, inspired ${l1identifier3} to try to set the record for most ${l1food1} caught in the ${l1bodyPart1} by an individual in ${l1number2} minute(s), self-thrown.`

//   } //end of getLib1()



// function nextLib1(){

// let firstLib = document.getElementById('firstLib')
// firstLib.setAttribute('style', 'display: none')
// nextButton1.setAttribute('style', 'display: none')

// }

 

