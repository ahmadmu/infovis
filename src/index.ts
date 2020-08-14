import Vue from 'vue';
import MainComponent from './components/Main.vue';
import VueRouter from 'vue-router'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faBars, faMinus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";


import App from './components/App.vue';

import * as p5 from 'p5';
import 'p5/lib/addons/p5.sound.min';

// const Kempelen    = () => import( /* webpackChunkName: "kempelen"  */  './components/Kempelen.vue' );
// const Resonator   = () => import( /* webpackChunkName: "resonator" */  './components/Resonator.vue');
// const Formant     = () => import( /* webpackChunkName: "formant"   */  './components/Formant.vue'  );
// const Synthesis   = () => import( /* webpackChunkName: "synthesis" */  './components/Synthesis.vue');

const test = new p5.FFT();

const routes = [
    { path: '/anatomy/:page', component: App, name: 'anatomy' }, 
    { path: '/kempelen', component: App, name: 'kempelen' },
    { path: '/resonator/:page', component: App, name: 'resonator'},
    { path: '/formant', component: App, name: 'formant' },
    { path: '/synthesis', component: App, name: 'synthesis' },
    { path: '/resonator', redirect: '/resonator/intro'},
    { path: '*', redirect: '/anatomy/1' }
]

const router = new VueRouter({
    routes
})

Vue.use(VueRouter);

const v = new Vue({
    el: '#app',
    template: `
    <div>
        <main-component></main-component>
    </div>
    `,
    components: {
        MainComponent,
    },
    router
});

// Fontawesome
library.add(faPlus, faBars, faMinus, faTimes)

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
