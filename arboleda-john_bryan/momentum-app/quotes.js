let quotes = [
    '"The Best Way To Get Started Is To Quit Talking And Begin Doing." - Walt Disney',
    '"Dont Let Yesterday Take Up Too Much Of Today." - Will Rogers',
    '"You Learn More From Failure Than From Success. Dont Let It Stop You. Failure Builds Character." - Unknown',
];

var counter = 0;
var elem = document.getElementById('quotation');
var inst = setInterval(change, 2000);

function change() {
    elem.innerHTML = quotes[counter];
    counter++;
    if(counter >= quotes.length) {
        counter = 0;
    }
}

let quotation = document.getElementById('quotation');
let addQuote = document.getElementById('add-quote')
let quotesContainer = document.getElementById('quotesContainer');
let quoteSubmit = document.getElementById('submit-quote');


quoteSubmit.onclick =
function prevent(event) {
    event.preventDefault();
}

quoteSubmit.addEventListener('click', function(){
    let quoteValue = addQuote.value;
    quotes.push(quoteValue);
    quotation.innerText = `${quoteValue}`;
    addQuote.value = "";
})

