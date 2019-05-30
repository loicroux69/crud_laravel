/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

//require('./bootstrap');

//window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// const app = new Vue({
//     el: '#app',
// });
let toggledNode;

[].slice.call(document.getElementsByClassName('col'),0).forEach(function (e) {
    e.addEventListener("click",function (ev) {
        let htmlContent = document.getElementsByClassName(`profile${ev.target.dataset.profile}`)[0].innerHTML;

        console.log(toggledNode);
        if(toggledNode) {
            if (this.isEqualNode(toggledNode) === false) {
                toggledNode.classList.toggle('scale-high');
                this.classList.toggle('scale-high');
            }
        }else{
            this.classList.add('scale-high');
        }

        this.innerHTML = htmlContent;





        //console.log(document.getElementsByClassName(`profile${ev.target.dataset.profile}`)[0].innerHTML);
        toggledNode = this;
    })
}.bind(this));
