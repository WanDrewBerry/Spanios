
// const inputItem = document.querySelector('#inputItem')
// const inputQty = document.querySelector('#inputQty')
// const inputBudget = document.querySelector('#inputBudget')

const form = document.querySelector('form');
const addButton = document.querySelector('#addButton');
const listContainer = document.querySelector('#listContainer');


// _________ ADD BUTTON

addButton.addEventListener('click', function(e){
    e.preventDefault()
    let inputItem = document.querySelector('#inputItem').value;
    let inputQty = document.querySelector('#inputQty').value;
    let inputBudget = document.querySelector('#inputBudget').value;

    if(inputItem === '' && inputBudget === ''){
        alert("You must write an item name and the budget for it.");
    } 
    else if(inputItem === ''){
        alert("You must write an item to add.")
    }
    else if(inputBudget === ''){
        alert("You must provide your budget for the item.")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = `${inputQty} ${inputItem} - P ${inputBudget}`;
        listContainer.appendChild(li);

        // CREATING EDIT ICON
        let img = document.createElement("img");
        img.src = "images/edit1.png";
        li.appendChild(img);

        // CREATING DELETE ICON
        let deleteSpan = document.createElement('span');
        deleteSpan.innerHTML = "\u00d7";
        li.appendChild(deleteSpan);

        form.reset();
        saveData()
    }
})

listContainer.addEventListener('click', function(e){

    // IF THE ITEM IS DONE AND NEED TO CROSS OUT
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle("checked");
        saveData()
    }
    // TO REMOVE THE ITEM
    else if(e.target.tagName === 'SPAN'){
            e.target.parentElement.remove();
            saveData()
    }
    // TO EDIT THE ITEM
    else if(e.target.tagName === 'IMG'){
        // const listItem = e.target.parentElement;
        // listItem.contentEditable = true;
        // listItem.style.backgroundColor = '#dddbdb';
        const listItem = e.target.parentElement;
        const itemText = listItem.textContent;
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.value = itemText;
        listItem.appendChild(inputField);
    }
            
})


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function removeData(){
    localStorage.removeItem("data");
}
function clearData(){
    localStorage.clearData();
}
// clearData()
// removeData()
showData()
