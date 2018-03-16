/*
function addItem() {
   
    var li = document.createElement("li");
    var input = document.getElementById("inputText");
    li.innerHTML = input.value;
    input.value = " ";
    document.getElementById("listName").appendChild(li);
 
    
     var x = document.forms["formName"]["inputText"].value;
    if (x == "") {
      var feedback=document.getElementById("feedback");
        feedback.textContent = "Please enter something before submitting.";
        return false;
    }
}
 
function removeItem() {
    var list = document.getElementById("listName");
    list.removeChild(list.childNodes[0]);
}
*/


let ul = document.getElementById("listName");
let btn = document.getElementById("btn");
let input = document.getElementById("input-text");
let feedback = document.getElementById("feedback");

function addItem() {
   
    if (input.value !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = "";
        input.focus();
        
        // clear your input
        // put the cursor back to text-field
    } else {
        feedback.textContent = "Please enter something before submitting.";
    }
}
 
btn.addEventListener("click", addItem);

