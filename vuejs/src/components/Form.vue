<template>
	<div class='form' v-if="item != null">
		<div class='form_row'>
			<label>Name</label>
			<input name='name' v-on:change="onChange('name', $event)" v-bind:value="item.name" />
		</div>
	</div>
</template>

<script>

import { getById, findIndex } from '../lib.js';

export default
{
	computed:
	{
		item ()
		{
			var item = getById(this.$store.state.list, this.$store.state.active_id);
			return item;
		}
	},
	methods:
	{
		onChange: function (name, e)
		{
			this.$store.commit("changeValue", {"field": "name", "value": e.target.value});
		},
	}
}
</script>

<style>
</style>
