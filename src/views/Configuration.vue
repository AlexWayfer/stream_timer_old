<template>
	<div class="configuration">
		<ConfigurationForm />
	</div>
</template>

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
