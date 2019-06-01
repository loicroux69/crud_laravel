

// ... concatene l'element de type HTMLDOMNode pour obtenir un tableau qu'on peut parcourir avec for
[...document.getElementsByClassName('edit')].forEach(function (el) {
    let toggled = false;

    el.addEventListener("click", function (ev) {
        let editMode = ev.target.parentElement.nextElementSibling;

        if (toggled) {
            ev.target.textContent = "Edit";
            editMode.classList.toggle('d-none')
        } else {
            ev.target.textContent = "Close edit mode"
            editMode.classList.toggle('d-none')
        }

        toggled = !toggled;
    })
});


//On fait disparaitre l'alerte apres 1seconde
if (document.getElementsByClassName('alert').length > 0) {
    setTimeout(function () {
        Object.assign(document.getElementsByClassName('alert')[0].style, {
            display: 'none',
            opacity: 0
        });
    }, 1000);
}
