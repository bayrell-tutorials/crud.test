<style>
</style>


<List bind:active_id={ active_id } bind:list={ list }  />
<Form item={ getById( list, active_id ) } />


<script>
	import List from './List.svelte';
	import Form from './Form.svelte';
	import { getById } from '../lib.js';
	
	export let active_id = -1;
	export let list = [];
</script>
