import {createRouter, createWebHistory} from 'vue-router'

import home from './views/Home'
import Search from './views/Search'
import Collections from './views/Collections'
import ViewItems from './views/ViewItems'

export default createRouter({
	history: createWebHistory(process.env.BASE_URL),
	mode: 'history',
	routes: [
		{path: '/', component: home},
		{path: '/search', component: Search},
		{path: '/collection', redirect: '/collection/playlists'},
		{path: '/collection/tracks', component: ViewItems},
		{path: '/collection/:option', component: Collections},
		// {path: '/playlist/:item', component: ViewItems},
		// {path: '/album/:item', component: ViewItems}
	]
})