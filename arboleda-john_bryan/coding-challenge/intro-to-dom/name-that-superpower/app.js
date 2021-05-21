var justiceLeague = [
    {name: "Superman", superpower: "Super strength"}, 
    {name: "Batman", superpower: "Super rich"},
    {name: "Wonder Woman", superpower: "Super lasso"}, 
    {name: "The Flash", superpower: "Super speed"}, 
    {name: "Green Lantern", superpower: "Super ring"}
]

var ul = document.getElementById('league')


for(let i = 0; i < justiceLeague.length; i++) {
    var createList = document.createElement('li')
    createList.textContent = justiceLeague[i].name + ' ' + justiceLeague[i].superpower
    ul.append(createList)
}

const button = document.querySelector('button')

function alertButton() {
    alert('This button has been clicked')
}

button.addEventListener('click', alertButton)

var input = document.querySelector('input')
var log = document.getElementById('values')

input.addEventListener('input', updateValue)

function updateValue(e) {
    log.textContent = e.target.value;
}
