/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/
const printHere = document.getElementById('print-here')



/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/


function myFunction() {
    var x = document.getElementById("myText").value;
    document.getElementById("demo").innerHTML = x;
    const form = document.querySelector('.form')
    form.setAttribute("style", "display: none");


  }





printHere.innerHTML = `<div class="form form-disappear">
<input type="text" id="myText" placeholder="Person's name">
<button onclick="myFunction()">Enter</button>
</div>   <p id="demo" class="input"></p>, who has broken more than 150 Guinness records to promote STEM education, said his recent experiences with mouth-catching records, including one for using his mouth to bounce a table tennis ball off a wall, inspired him to try to set the record for most candy-coated corn caught in the mouth by an individual in one minute (self-thrown). He caught 50 sweet little kernels. `


