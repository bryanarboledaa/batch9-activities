let inputName = document.getElementById('input-name');
let btnSubmit = document.getElementById('submit-name');


btnSubmit.onclick =  
function nameInput(event) {
    event.preventDefault();
   let inputNameDisplay = inputName.value;
   let greetings = document.getElementById('greetings');
   greetings.innerText = "Hello, " + `${inputNameDisplay}` + " !";
   inputName.classList.toggle('hide');
    btnSubmit.classList.toggle('hide');
    greetings.classList.toggle('show');
}


let inputFocus = document.getElementById('input-focus');
let fcsSubmit = document.getElementById('submit-focus');

fcsSubmit.onclick =
function focusInput(event) {
    event.preventDefault();
    let focusInputDisplay = inputFocus.value;
    let focus = document.getElementById('focus');
    focus.innerText = "Main focus: " + `${focusInputDisplay}`;
    inputFocus.classList.toggle('hide');
    fcsSubmit.classList.toggle('hide');
    focus.classList.toggle('show');
}
nameInput();
focusInput();