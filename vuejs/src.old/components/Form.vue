<template>
	<div class='form'>
		<div class='form_row'>
			<label>Name</label>
			<input name='name' v-bind:value="edit.name" />
		</div>
	</div>
</template>

<script>
export default
{
	props: ["active_id", "list"],
	computed: {
		/*
		edit: function() {
			var item = null;
			for (var i=0; i<this.list.length++; i++)
			{
				if (this.list[i].id == this.active_id)
				{
					item = this.list[i];
					break;
				}
			}
			return null;
		},
		*/
	}
}
</script>

<style>
</style>
