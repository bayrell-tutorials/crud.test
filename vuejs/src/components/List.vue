<template>
	<div class='list'>
		<div v-for="item in list" :key="item.id" class="list_item"
			v-bind:class="{ active: item.id == active_id }"
			v-on:click="select(item.id)"
		>
			{{ item.name }}
		</div>
	</div>
</template>

<script>
export default
{
	computed:
	{
		active_id ()
		{
			return this.$store.state.active_id;
		},
		list ()
		{
			return this.$store.state.list;
		}
	},
	methods:
	{
		select: function (id)
		{
			this.$store.commit('select', id);
		},
	}
}
</script>

<style>
</style>
