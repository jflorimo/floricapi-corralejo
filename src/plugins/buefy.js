import Vue from 'vue'
import 'buefy/dist/buefy.css'

import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faArrowUp, faCaretDown, faCaretUp);
Vue.component('vue-fontawesome', FontAwesomeIcon);


import { ConfigProgrammatic, Table } from 'buefy'
Vue.use(Table)
ConfigProgrammatic.setOptions({
	defaultIconComponent: 'vue-fontawesome',
    defaultIconPack: 'fas',
});