//1. Adding a new item to the list of items: 
function newItem(){
    let li= document.createElement("li");
let inputValue=document.getElementById("input").value;
let text = document.createTextNode(inputValue);
li.appendChild(text);
if(inputValue===''){
    alert("you must write something");
}
else{
    let list=document.querySelector('#list');
    list.appendChild(li);
    document.getElementById("input").value = "";
   }


//2. Crossing out an item from the list of items:
function crossOut() {
    li.classList.toggle("strike");
}

let crossOutButton=document.createElement("crossOutButton");
crossOutButton.appendChild(document.createTextNode("X"));
  li.appendChild(crossOutButton);
  crossOutButton.addEventListener("click", deleteListItem);
 
  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
  function deleteListItem() {
    li.classList.add("delete")
  }
  // 4. Reordering the items: 
  $('#list').sortable();

}