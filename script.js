let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

window.onload = function () {
    if (window.navigator.onLine) {
        onLine()
    }
    if (window.navigator.offLine) {
        offLine()
    }

}

window.addEventListener("onLine", function () {
    onLine();

});

window.addEventListener("offLine", function () {
    offLine();

});

reload.onclick = function () {
    window.location.reload();
}



function offLine() {
    title.innerHTML = 'Offline Now ';
    title.style.color = 'red';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}

function onLine() {
    title.innerHTML = 'Online Now';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}





