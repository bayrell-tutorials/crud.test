<template>
	<div class="app">
		<List
			v-bind:active_id="active_id"
			v-bind:list="list"
		/>
		<Form
			v-bind:active_id="active_id"
			v-bind:list="list"
		/>
	</div>
</template>

<script>
import Form from './Form.vue'
import List from './List.vue'

export default
{
	name: 'App',
	components:
	{
		"Form": Form,
		"List": List,
	},
	data: function()
	{
		return {
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
		};
	},
}
</script>

<style>
*{ box-sizing: border-box; }
body{ margin:0; padding:0; }
.app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	font-size: 14px;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	display: flex;
	align-items: stretch;
}
.list, .form{
	width: 50%;
	padding: 0px 10px;
}
.form_row{
}
.form_row label{
	font-weight: bold;
	display: block;
	text-align: left;
	padding-bottom: 5px;
}
.form_row input{
	width: 100%;
	padding: 6px 12px;
}
.list{}
.list_item{
	display: block;
	text-align: left;
	cursor: pointer;
	padding: 10px;
}
.list_item.active{
	background-color: blue;
	color: white;
}
</style>
