

// ... concatene l'element de type HTMLDOMNode pour obtenir un tableau qu'on peut parcourir
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


//file name show

[...document.getElementsByClassName("custom-file-input")].forEach(function (el) {

    el.addEventListener("change", function (el) {
        var fileName = this.value.split("\\").pop();
        let modify = this.nextElementSibling;
        modify.classList.add('selected')
        modify.innerHTML = fileName;
    })
}.bind(this));
