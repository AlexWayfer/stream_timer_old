<template>
	<div class="configuration">
		<ConfigurationForm />
	</div>
</template>

<style>
	.configuration {
		padding: 0.4em;
	}
</style>

<script>
// @ is an alias to /src
import ConfigurationForm from '@/components/ConfigurationForm.vue'

export default {
	name: 'configuration',
	components: {
		ConfigurationForm
	}
}
</script>
