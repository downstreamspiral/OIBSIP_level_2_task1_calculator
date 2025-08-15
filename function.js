

let input = document.getElementById('input_field_area');
let numbuttons = document.querySelectorAll('.number-btn');
let optbuttons = document.querySelectorAll('.operator-btn');
let clrbutton = document.getElementById('clear-btn');
let decmbutton = document.getElementById('decimal-btn');
let equalbutton = document.getElementById('equal-btn');
let sqrt = document.getElementById('square-root');





numbuttons.forEach(a => {
    a.addEventListener('click', () => {

        input.value += a.textContent;
        console.log(input.value);

    });
});

optbuttons.forEach(a => {
    a.addEventListener('click', () => {
        input.value += a.getAttribute('data-value');

    })
});

decmbutton.addEventListener('click', () => {
    input.value += decmbutton.getAttribute('data-value');
});


clrbutton.addEventListener('click', () => {
    input.value = '';
});







equalbutton.addEventListener('click', () => {

    try {

        
        input.value = eval(input.value);


    } catch (error) {
        input.value = 'ERROR';
    }
})


