import Vue from 'vue'
import 'buefy/dist/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
    faArrowUp, faCaretDown, faCaretUp, faEye, faEyeSlash, faUserCircle, faStar
} from "@fortawesome/free-solid-svg-icons";

library.add(faArrowUp, faCaretDown, faCaretUp, faEye, faEyeSlash, faUserCircle, faStar);
Vue.component('FontAwesomeIcon', FontAwesomeIcon);


import { ConfigProgrammatic, Table } from 'buefy'
Vue.use(Table)
ConfigProgrammatic.setOptions({
	defaultIconComponent: 'font-awesome-icon',
    defaultIconPack: 'fas',
});
