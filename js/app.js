
/*------------------------ Cached Element References ------------------------*/
const reset = document.getElementById('reset')
const forms1 = document.querySelectorAll('.forms1')
const forms2 = document.querySelectorAll('.forms2')
const forms3 = document.querySelectorAll('.forms3')
const lib1Start = document.getElementById('lib1')
const lib2Start = document.getElementById('lib2')
const lib3Start = document.getElementById('lib3')
const lib1Forms = document.getElementById("firstLib")
const getLib1 = document.getElementById('getLib1')
const getLib2 = document.getElementById('getLib2')
const getLib3 = document.getElementById('getLib3')
const lib1 = document.getElementById('firstLib')
const lib2 = document.getElementById('secondLib')
const lib3 = document.getElementById('thirdLib')
const l1printHere = document.getElementById('l1-print-here')
const l2printHere = document.getElementById('l2-print-here')
const l3printHere = document.getElementById('l3-print-here')



/*----------------------------- Event Listeners -----------------------------*/


lib1Start.addEventListener('click', ()=>{
    if (lib1.style.display === "none") {
    lib1.style.display = "block";
  } else {
    lib1.style.display = "none";
  }
})

lib2Start.addEventListener('click', ()=>{
    if (lib2.style.display === "none") {
    lib2.style.display = "block";
  } else {
    lib2.style.display = "none";
  }

})

lib3Start.addEventListener('click', ()=>{
  console.log("this works3")
})

getLib1.addEventListener('click', ()=>{
 renderLib1()
 console.log('button still works')
})
getLib2.addEventListener('click', ()=>{
  renderLib2()
  console.log("works 2")
})
getLib3.addEventListener('click', ()=>{
  console.log("works 3")
})


// reset button needs a lot of work

reset.addEventListener('click', ()=>{
  if (lib1.style.display === "block") {
    lib1.style.display = "none"
  } 
  if (lib2.style.display === "block"){
    lib2.style.display = "none"
  }

//  document.getElementById("l1-properNoun1").innerText = ""
//  document.getElementById("l1-number1").innerText = ""
//  document.getElementById('l1-fourLetterWord').innerText = ""
//  document.getElementById('l1-identifier1').innerText = ""
//  document.getElementById('l1-bodyPart1').innerText = ""
//  document.getElementById('l1-identifier2').innerText = ""
//  document.getElementById('l1-sportball1').innerText = ""
//  document.getElementById('l1-identifier3').innerText = ""
//  document.getElementById('l1-food1').innerText = ""
//  document.getElementById('l1-number2').innerText = ""

})



/*-------------------------------- Functions --------------------------------*/




function  renderLib1() {

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


    forms1.forEach(form => form = form.setAttribute("style", "display: none"))
  

    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
 
    l1printHere.innerHTML = `${capitalizeFirstLetter(l1properNoun1)}, who has broken more than ${l1number1} Guinness records to promote ${l1fourLetterWord} education, said ${l1identifier1} recent experiences with ${l1bodyPart1}-catching records, including one for using ${l1identifier2} ${l1bodyPart1} to bounce a ${l1sportball1} off a wall, inspired ${l1identifier3} to try to set the record for most ${l1food1} caught in the ${l1bodyPart1} by an individual in ${l1number2} minute(s), self-thrown.`

  } //end of renderLib1()

//begin renderlib2()
  function renderLib2(){

  let l2animal1 = document.getElementById('l2-animal1').value 



  forms2.forEach(form => form = form.setAttribute("style", "display: none"))


    function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }



l2printHere.innerHTML = `${capitalizeFirstLetter(l2animal1)} Hash — a census-designated place by the Ohio River consisting mainly of a general store — chooses its mayors “based on the candidates’ willingness to have their belly scratched,” according to the community’s website. These four-legged public officials promote the town, which is owned by the Rabbit Hash Historical Society, and locals can “vote” for candidates every four years by donating to the society. Wilbur’s campaign for mayor raised $6,165 on an online fundraising page.`

  }
// end rednerlib2()

// begin renderlib3()

function renderLib3() {



  forms3.forEach(form => form = form.setAttribute("style", "display: none"))

  // function capitalizeFirstLetter(string) {
  //   return string.charAt(0).toUpperCase() + string.slice(1);
  // }


  l3printHere.innerHTML = `Thank you very much. This is a very big announcement. The biggest ever concerning drugs and drug pricing. So today, I have to tell you it’s a great honor for me to announce that my administration is issuing two groundbreaking rules to very dramatically lower the price of prescription drugs for the American people. Especially for our cherish seniors. We’re pleased to be joined on this occasion by Secretary of Health and Human Services, Alex Azar, an administrator of Center for Medicare, Medicaid Services, Seema Verma. Thank you both. Thank you both. And thank you all for being here. Appreciate it.`









}








// end renderLib3()








// function nextLib1(){

// let firstLib = document.getElementById('firstLib')
// firstLib.setAttribute('style', 'display: none')
// nextButton1.setAttribute('style', 'display: none')

// }

 

