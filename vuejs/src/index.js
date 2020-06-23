import Vue from 'vue'
import Vuex from 'vuex'
import App from './components/App.vue'
import { getById, findIndex } from './lib.js'


Vue.config.productionTip = false
Vue.use(Vuex);


const store = new Vuex.Store({
	state:
	{
		"active_id": 0,
		"list": [
			{
				"id": 1,
				"name": "Name 1",
			},
			{
				"id": 2,
				"name": "Name 2",
			},
			{
				"id": 3,
				"name": "Name 3",
			},
		],
	},
	mutations:
	{
		
		select (state, id)
		{
			state.active_id = id;
		},
		
		
		changeValue (state, obj)
		{
			var index = findIndex(state.list, state.active_id);
			state.list[index][obj.field] = obj.value;
		},
		
	}
})


var v = new Vue({
	render: h => h(App),
	store: store,
}).$mount('#app');


window["store"] = store;
