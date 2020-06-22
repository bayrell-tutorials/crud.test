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
	props: ["active_id", "list"],
	methods:
	{
		select: function (id)
		{
			this.active_id = id;
		},
	}
}
</script>

<style>
</style>
