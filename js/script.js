const itemsList = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];



document.getElementById('addBtn').onclick = function () {
   
    const item = document.querySelector("#item");
    createItem(item);
}

document.querySelector("#item").addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
      const item = document.querySelector("#item")
      createItem(item)
    }
  })

function createItem(item){
    itemsList.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsList));
    location.reload();
}

const displayToDo = () => {
    let items = "";
    for(let i = 0; i < itemsList.length; i++) {

        items +='<div id="task"><div class="span"> <textarea disabled>' + itemsList[i] +
            '</textarea></div><button id="delete" onclick="activateDelete()"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">'
            + '<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>'
            + '</svg></button></div>';

    }
    document.getElementById('newTask').innerHTML += items; 
    activateDelete();
}; 

function  activateDelete() {
    let deleteBtn = document.querySelectorAll("#delete");
    deleteBtn.forEach((dB,i) => {
        dB.addEventListener("click", () => {
            deleteItem(i) 
               })
        
    });

    function deleteItem(i){
        itemsList.splice(i,1);
        localStorage.setItem('items', JSON.stringify(itemsList));
        location.reload();
    }
}

window.onload = function(){
    displayToDo();
    document.getElementById("item").focus(); 
    console.log(localStorage);
}