import App from './components/App.svelte';


var data = {
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
	"edit_item": null,
};


const app = new App({
	target: document.getElementById('app'),
	props: data,
});

export default app;