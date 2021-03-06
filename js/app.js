
/*------------------------ Cached Element References ------------------------*/
const reset = document.getElementById('reset')
const forms1 = document.querySelectorAll('.forms1')
const forms2 = document.querySelectorAll('.forms2')
const forms3 = document.querySelectorAll('.forms3')
const lib1Start = document.getElementById('lib1')
const lib2Start = document.getElementById('lib2')
const lib3Start = document.getElementById('lib3')
const getLib1 = document.getElementById('getLib1')
const getLib2 = document.getElementById('getLib2')
const getLib3 = document.getElementById('getLib3')
const clearLib1 = document.getElementById('clearLib1')
const clearLib2 = document.getElementById('clearLib2')
const clearLib3 = document.getElementById('clearLib3')
const lib1 = document.getElementById('firstLib')
const lib2 = document.getElementById('secondLib')
const lib3 = document.getElementById('thirdLib')
const l1printHere = document.getElementById('l1-print-here')
const l2printHere = document.getElementById('l2-print-here')
const l3printHere = document.getElementById('l3-print-here')
const l2animal1 = document.getElementById('l2-animal1')
const audio = new Audio('audio/animal_cat_meow.mp3')
const welcome = document.getElementById('welcome')
const chooseLibAbove = document.getElementById('chooseLibAbove')

/*----------------------------- Event Listeners -----------------------------*/

lib1Start.addEventListener('click', () => {
  if (lib1.style.display === "none") {
    lib1.style.display = "block"
    getLib1.style.display = "block"
    clearLib1.style.display = "block"
    clearLib2.style.display = "none"
    clearLib3.style.display = "none"
    lib2.style.display = "none"
    lib3.style.display = "none"
    getLib2.style.display = "none"
    getLib3.style.display = "none"
    chooseLibAbove.style.display = "none"
    welcome.style.display = "none"
  }
})

lib2Start.addEventListener('click', () => {
  if (lib2.style.display === "none") {
    lib2.style.display = "block"
    getLib2.style.display = "block"
    clearLib2.style.display = "block"
    clearLib3.style.display = "none"
    clearLib1.style.display = "none"
    lib1.style.display = "none"
    lib3.style.display = "none"
    getLib1.style.display = "none"
    getLib3.style.display = "none"
    chooseLibAbove.style.display = "none"
    welcome.style.display = "none"
  }
})

lib3Start.addEventListener('click', () => {
  if (lib3.style.display === "none") {
    lib3.style.display = "block"
    getLib3.style.display = "block"
    clearLib3.style.display = "block"
    clearLib2.style.display = "none"
    clearLib1.style.display = "none"
    lib1.style.display = "none"
    lib2.style.display = "none"
    getLib2.style.display = "none"
    getLib1.style.display = "none"
    chooseLibAbove.style.display = "none"
    welcome.style.display = "none"
  }
})

getLib1.addEventListener('click', () => {
  l1printHere.className += 'l1 animate__animated animate__fadeInLeft'
  renderLib1()
})
getLib2.addEventListener('click', () => {
  l2printHere.className += 'l2 animate__animated animate__fadeInLeft'
  renderLib2()
})
getLib3.addEventListener('click', () => {
  l3printHere.className += 'l3 animate__animated animate__fadeInLeft'
  renderLib3()
})
clearLib1.addEventListener('click', () => {
  l1Clear()
})
clearLib2.addEventListener('click', () => {
  l2Clear()
})
clearLib3.addEventListener('click', () => {
  l3Clear()
})

reset.addEventListener('click', () => {
  location = location
})

l2animal1.onclick = function () {
  audio.volume = 0.01;
  audio.play();
}

/*-------------------------------- Functions --------------------------------*/

function renderLib1() {

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
  let l1confetti = document.getElementById('l1-confetti-here')

  forms1.forEach(form => form = form.setAttribute("style", "display: none"))

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  l1confetti.innerHTML = `  
  <div class="container" id="container">
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
  <div class="confetti"></div>
 </div>`


  l1printHere.innerHTML = `${capitalizeFirstLetter(l1properNoun1)}, who has broken more than ${l1number1} Guinness records to promote ${l1fourLetterWord} education, said ${l1identifier1} recent experiences with ${l1bodyPart1}-catching records, including one for using ${l1identifier2} ${l1bodyPart1} to bounce a ${l1sportball1} off a wall, inspired ${l1identifier3} to try to set the record for most ${l1food1} caught in the ${l1bodyPart1} by an individual in ${l1number2} minute(s), self-thrown.`

}

//begin renderlib2()-----------------------------------------
function renderLib2() {

  let l2animal1 = document.getElementById('l2-animal1').value
  let l2place1 = document.getElementById('l2-place1').value
  let l2thing1 = document.getElementById('l2-thing1').value
  let l2animal2 = document.getElementById('l2-animal2').value.toLowerCase()
  let l2bodyPart1 = document.getElementById('l2-bodyPart1').value.toLowerCase()
  let l2adjective1 = document.getElementById('l2-adjective1').value.toLowerCase()
  let l2favoriteThing1 = document.getElementById('l2-favoriteThing1').value.toLowerCase()
  let l2name1 = document.getElementById('l2-name1').value
  let l2number1 = document.getElementById('l2-number1').value
  let l2confetti = document.getElementById('l2-confetti-here')

  forms2.forEach(form => form = form.setAttribute("style", "display: none"))


  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  function uppercase(str) {
    let array1 = str.split(' ');
    let newarray1 = [];
    for (let x = 0; x < array1.length; x++) {
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
  }

  l2confetti.innerHTML = `  
  <div class="container" id="container">
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
    <div class="confetti"></div>
  </div>`


  l2printHere.innerHTML = `${capitalizeFirstLetter(l2animal1)} Hollow — a census-designated place near ${uppercase(l2place1)} consisting mainly of a ${l2thing1} store — chooses its ${l2animal2} mayors “based on the candidates’ willingness to have their ${l2bodyPart1} scratched,” according to the community’s website. These ${l2adjective1} public officials promote the town, which is owned by the ${capitalizeFirstLetter(l2animal1)} Hollow Historical Society, and locals can “vote” for candidates every four years by ${l2favoriteThing1}. ${capitalizeFirstLetter(l2name1)}’s campaign for mayor raised $${l2number1} on an online fundraising page.`
}

// begin renderlib3()-------------------------------------------------------

function renderLib3() {
  let l3adjective1 = document.getElementById('l3-adjective1').value.toLowerCase()
  let l3thing1 = document.getElementById('l3-thing1').value.toLowerCase()
  let l3chore1 = document.getElementById('l3-chore1').value
  let l3name1 = document.getElementById('l3-name1').value
  let l3dislike1 = document.getElementById('l3-dislike1').value
  let l3blueCheese1 = document.getElementById('l3-blueCheese1').value.toLowerCase()
  let l3name2 = document.getElementById('l3-name2').value

  let l3confetti = document.getElementById('l3-confetti-here')

  forms3.forEach(form => form = form.setAttribute("style", "display: none"))

  function uppercase(str) {
    let array1 = str.split(' ');
    let newarray1 = [];
    for (let x = 0; x < array1.length; x++) {
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
  }

  l3confetti.innerHTML = `  
  <div class="container" id="container">
   <div class="confetti"></div>
   <div class="confetti"></div>
   <div class="confetti"></div>
   <div class="confetti"></div>
   <div class="confetti"></div>
   <div class="confetti"></div>
   <div class="confetti"></div>
   <div class="confetti"></div>
   <div class="confetti"></div>
   <div class="confetti"></div>
  </div>`


  l3printHere.innerHTML = `Thank you very much. This is a very ${l3adjective1} announcement. The biggest ever concerning ${l3thing1} and ${l3thing1} pricing. So today, I have to tell you it’s a great honor for me to announce that my administration is issuing two groundbreaking rules to very dramatically lower the price of prescription ${l3thing1} for the American people. Especially for our ${l3blueCheese1} seniors. We’re pleased to be joined on this occasion by Secretary of ${uppercase(l3chore1)}, ${uppercase(l3name1)}, and Administrator of ${uppercase(l3dislike1)}, ${uppercase(l3name2)}. Thank you both. Thank you both. And thank you all for being here.`

}

function l1Clear() {
  document.getElementById("l1-properNoun1").value = ""
  document.getElementById("l1-number1").value = ""
  document.getElementById('l1-fourLetterWord').value = ""
  document.getElementById('l1-identifier1').value = ""
  document.getElementById('l1-bodyPart1').value = ""
  document.getElementById('l1-identifier2').value = ""
  document.getElementById('l1-sportball1').value = ""
  document.getElementById('l1-identifier3').value = ""
  document.getElementById('l1-food1').value = ""
  document.getElementById('l1-number2').value = ""
  let l1confetti = document.getElementById('l1-confetti-here')

  forms1.forEach(form => form = form.setAttribute("style", "display: block"))

  l1confetti.innerText = ""
  l1printHere.innerText = ""
}

function l2Clear() {
  document.getElementById('l2-animal1').value = ""
  document.getElementById('l2-place1').value = ""
  document.getElementById('l2-thing1').value = ""
  document.getElementById('l2-animal2').value = ""
  document.getElementById('l2-bodyPart1').value = ""
  document.getElementById('l2-adjective1').value = ""
  document.getElementById('l2-favoriteThing1').value = ""
  document.getElementById('l2-name1').value = ""
  document.getElementById('l2-number1').value = ""
  let l2confetti = document.getElementById('l2-confetti-here')

  forms2.forEach(form => form = form.setAttribute("style", "display: block"))

  l2confetti.innerText = ""
  l2printHere.innerText = ""
}

function l3Clear() {
  document.getElementById('l3-adjective1').value = ""
  document.getElementById('l3-thing1').value = ""
  document.getElementById('l3-chore1').value = ""
  document.getElementById('l3-name1').value = ""
  document.getElementById('l3-dislike1').value = ""
  document.getElementById('l3-blueCheese1').value = ""
  document.getElementById('l3-name2').value = ""

  let l3confetti = document.getElementById('l3-confetti-here')

  forms3.forEach(form => form = form.setAttribute("style", "display: block"))

  l3confetti.innerText = ""
  l3printHere.innerText = ""
}