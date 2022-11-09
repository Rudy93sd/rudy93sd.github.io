var btnpopup = document.getElementById('btnpopup');
var overlay = document.getElementById('overlay');
var btnClose = document.getElementById('btnClose');
btnpopup.addEventListener('click', openModal);
function openModal() {
    overlay.style.display = 'block';
}