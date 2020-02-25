let inptbut= document.getElementById('inpt');
let cards = Array.from(document.getElementsByClassName('card'));
let cmpltbtns = Array.from(document.getElementsByClassName('cmpltbtn'));
let inpts = Array.from(document.getElementsByClassName('inpttxt'));


inptbut.addEventListener("click", function(e){
    let card = document.createElement("div");
    let inputValue = document.getElementById("newinpt").value;
    let inpttxt = document.createElement("h3");
    inpttxt.innerText = inputValue;
    inpttxt.className="inpttxt";
    card.appendChild(inpttxt);
    if (inputValue === "") {
      alert("Add ToDo!");
    } else {
      document.getElementById("tasklist").appendChild(card);
      card.className = "card";
    }
    document.getElementById("newinpt").value = "";

    let cmpltbtn = document.createElement("button");
    cmpltbtn .className = "cmplt";
    cmpltbtn .innerText= "Complete";
    let btns = document.createElement("div")
    btns .className = "btns";
    btns.appendChild(cmpltbtn);
    card.appendChild(btns);

    let x = true;
    cmpltbtn.addEventListener ("click", function(f) {
      
      

      if (x===true) {
        x = false
        cmpltbtn.innerText="Undo" ; 
        inpttxt.classList.toggle("linetgh");
      }
      else if (x === false) {
        x = true
        cmpltbtn.innerText="Complete"
        inpttxt.classList.toggle("linetgh");
      }

      
    });
    
  
    let dltbtn = document.createElement("button");
    dltbtn.className = "dlt";
    dltbtn.innerText= "Delete";
    btns.appendChild(dltbtn);
    dltbtn.addEventListener ("click", function(f) {
      dltbtn.parentElement.parentElement.remove();
    });
})