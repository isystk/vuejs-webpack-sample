import './assets/css/normalize.css';
import './assets/css/common.css';

var $ = require('./assets/js/jquery-3.4.1.min.js');
window.$ = $;
window.jQuery = $;
require('./assets/js/common.js');

import Vue from "vue"
import App from "./pages/index"

new Vue({
    el: "#app",
    template: "<App/>",
    components: { App }
})
