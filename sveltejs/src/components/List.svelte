<style>
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


<div class='list'>
	{#each list as item, index}
		<div class='list_item' class:active={ active_id == item.id ? "active" : "" }
			on:click={ onClick } data-index={ index }
		>
			{ item.name }
		</div>
	{/each}
</div>



<script>
	export let list = [];
	export let active_id = -1;
	
	function onClick(event)
	{
		var index = event.currentTarget.getAttribute('data-index');
		active_id = list[index].id;
	}
	
</script>