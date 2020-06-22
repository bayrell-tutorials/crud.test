<style>
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
</style>



{#if item != null}

<div class='form'>
	<div class='form_row'>
		<label>Name</label>
		<input
			name='name' placeholder="enter your name" bind:value={ item.name }
		/>
	</div>
</div>

{/if}


<script>
	export let item = null;
</script>