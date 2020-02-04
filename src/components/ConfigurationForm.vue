<template>
	<form @submit="submit">
		<p class="time">
			<input size="2" v-model="hours" required /> :
			<input size="2" v-model="minutes" @input="inputHandler" required />
		</p>
		<p>
			<button type="submit">Open timer</button>
		</p>
	</form>
</template>

<script>
export default {
	name: 'ConfigurationForm',
	data() {
		return {
			time: {
				hours: '00',
				minutes: '05',
				seconds: '00'
			}
		}
	},
	computed: {
		hours: {
			get() {
				return this.time.hours
			},

			set(value) {
				this.time.hours = this.formatTime(value)
			}
		},

		minutes: {
			get() {
				return this.time.minutes
			},

			set(value) {
				this.time.minutes = this.formatTime(value)
			}
		},

		seconds: {
			get() {
				return this.time.seconds
			},

			set(value) {
				this.time.seconds = this.formatTime(value)
			}
		}
	},
	methods: {
		inputHandler(event) {
			event.preventDefault()
			console.debug('inputHandler')
			this.value = this.formatTime(this.value)
		},

		formatTime(value) {
			return parseInt(value)
		},

		submit() {
			let routeData = this.$router.resolve(
				{
					name: 'timer',
					query: { time: this.time }
				}
			)
			window.open(routeData.href, '_blank')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
