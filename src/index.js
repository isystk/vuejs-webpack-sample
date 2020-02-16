import './assets/sass/normalize.scss';
import './assets/sass/common.scss';

var $ = require('./assets/js/jquery-3.4.1.min.js');
window.$ = $;
window.jQuery = $;
require('./assets/js/common.js');

import Vue from "vue"
import App from "./pages/index"
import router from './router'
import store from './store'

new Vue({
    el: "#app",
    router,
    store,
    template: "<App/>",
    components: { App }
})
