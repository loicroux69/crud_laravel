
//====================
//j'aime beaucoup jQuery donc je fait comme si je l'utilisais (le Javascript c'est quand même beaucoup plus performant)
//====================
let saveHtml, toggledNode, toggledHtml;

//rempli un tableau vide avec le contenu de mon noeud html
[].slice.call(document.getElementsByClassName('col'), 0).forEach(function (e) {

    //onclick evênement
    e.addEventListener("click", function () {
        //je récupère de la meilleure des manières le contenu des articles
        let htmlContent = document.getElementsByClassName(`profile${this.dataset.profile}`)[0].getElementsByTagName('p')[0].textContent;

        //si je n'ai pas encore cliquer sur un profile
        if (toggledNode) {
            //si les deux profile sont différents j'affiche le contenu de leur article relié
            if (this.dataset.profile !== toggledNode.dataset.profile) {
                toggledNode.classList.toggle('scale-high');
                this.classList.toggle('scale-high');

                //on sauvegarde une valeur temporaire pour bien remettre le contenu du profile une fois qu'on clique sur un autre
                toggledNode.innerHTML = saveHtml;
                saveHtml = this.innerHTML;
                this.innerHTML = htmlContent;
            }
        } else {
            this.classList.add('scale-high');
            saveHtml = this.innerHTML;
            this.innerHTML = htmlContent;
        }

        //On sauvegarde le noeud dont on consulte la description du profile
        toggledNode = this;
    })
}.bind(this));



