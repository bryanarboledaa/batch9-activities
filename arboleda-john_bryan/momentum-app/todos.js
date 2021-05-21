let addToDoButton = document.getElementById('submit-todo');
let toDoContainer = document.querySelector('.toDoContainer');
let inputField = document.getElementById('add-to-do');

addToDoButton.onclick =
function prevent(event) {
    event.preventDefault();
}
addToDoButton.addEventListener('click', function(){
    var paragraph = document.createElement('li');
    paragraph.innerText = inputField.value;
    toDoContainer.appendChild(paragraph);
    inputField.value = "";
    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = "line-through";
    })
    paragraph.addEventListener('dblclick', function(){
        toDoContainer.removeChild(paragraph);
    })
})

