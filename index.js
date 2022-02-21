const open_1 = document.getElementById('open')
const modal_container = document.getElementById('modal_container');
const close_1 = document.getElementById('close');


open_1.addEvenListener('click',() => {
    modal_container.classList.add('show');
});
close_1.addEvenListener('click',() => {
    modal_container.classList.remove('show');
});