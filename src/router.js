import Vue from 'vue'
import qs from 'qs'
import Router from 'vue-router'
import Configuration from './views/Configuration.vue'
import Timer from './views/Timer.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'configuration',
			component: Configuration
		},
		{
			path: '/timer',
			name: 'timer',
			component: Timer,
			props: route => Object.assign({}, route.params, route.query)
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
		}
	],
	// set custom query resolver
	parseQuery(query) {
		return qs.parse(query)
	},
	stringifyQuery(query) {
		var result = qs.stringify(query)

		return result ? ('?' + result) : ''
	}
})
