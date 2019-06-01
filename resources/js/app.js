import assign from 'core-js-pure/stable/object/assign';


//polyfill pour changer plusieurs propriétés d'un object js


//====================
//j'aime beaucoup jQuery mais le Javascript c'est quand même beaucoup plus performant
//====================
let toggledNode;

//rempli un tableau vide avec le contenu de mon noeud html
[].slice.call(document.getElementsByClassName('box'), 0).forEach(function (e) {

    //onclick evênement
    e.addEventListener("click", function (ev) {
        //je récupère de la meilleure des manières le contenu des articles
        let text = document.getElementsByClassName(`profile${this.dataset.profile}`)[0].getElementsByTagName('p')[0].textContent;
        //si je n'ai pas encore cliquer sur un profile

        document.querySelector('.content-clicked').classList.toggle('d-none')
        document.querySelector('.content-clicked').textContent = text;

        clickEffect(ev, this);

        //On sauvegarde le noeud dont on consulte la description du profile
        toggledNode = this;
    })
}.bind(this));


//effet de cercle au clic

let clickEffect = (ev, elem) => {

    //ici on récupère les coordonnées du clic par rapport au bloc parent de celui cliqué
    let square = {top: window.screenTop, left: window.screenLeft},
        X = ev.clientX - square.left,
        Y = ev.clientY - square.top;

    if (elem.parentNode.querySelector('.circle')) {
        elem.parentNode.querySelector('.circle').classList.toggle('d-none');

        let circle = elem.parentNode.querySelector('.circle > circle');
        //On replace notre cercle déjà créer sur la position du click
        Object.assign(circle.style, {
            'cx': X, 'cy': Y,
        });
        document.body.style.overflowY = "hidden";
        elem.parentNode.querySelector('circle').classList.add('show-circle');
        document.querySelector('.arrow-return').classList.toggle('slide-arrow');

    } else {
        //création du cercle et positionnement sur l'endroit du click
        let node = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        node.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "circle"))

        node.querySelector('circle').classList.add('show-circle');

        Object.assign(node.querySelector('circle').style, {
            'cx': X, 'cy': Y,
        });

        node.classList.add('circle');
        //On desactive momentanement le scroll pedant la description
        document.body.style.overflowY = "hidden";
        elem.parentNode.appendChild(node);

        //creation de la fleche pour fermer la description
        document.querySelector('.arrow-return').classList.toggle('slide-arrow');
    }
};

document.querySelector('.arrow-return').addEventListener("click", function (e) {
    e.target.classList.toggle('slide-arrow');
    document.body.style.overflowY = "auto";
    setTimeout(function () {
        document.querySelector('.content-clicked').classList.toggle('d-none');
        document.querySelector('.circle').classList.toggle('d-none');
    },100);
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


