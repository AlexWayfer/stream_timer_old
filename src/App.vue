<template>
	<component :is="layout">
		<router-view :layout.sync="layout" />
	</component>
</template>

<style lang="postcss">
	body {
		font-family: sans-serif;
	}
</style>

<script>
export default {
	name: 'App',
	data() {
		return {
			layout: 'div'
		}
	}
}
</script>
