<template>
	<form @submit="submit">
		<fieldset>
			<legend>Time</legend>

			<label>
				<span>Hours:</span>
				<input size="2" v-model="hours" required />
			</label>

			<label>
				<span>Minutes:</span>
				<input size="2" v-model="minutes" @input="inputHandler" required />
			</label>
		</fieldset>

		<fieldset>
			<legend>Font</legend>

			<label>
				<span>Size:</span>
				<input size="2" v-model="fontSize" required />
			</label>
		</fieldset>

		<p>
			<button type="submit">Open timer</button>
		</p>
	</form>
</template>

<style>
	fieldset {
		> label {
			display: table-row;
			/* padding: 0.4em 0; */

			> span,
			> input {
				display: table-cell;
				padding: 0 0.4em;
			}

			> span {
				padding-top: 0.2em;
				padding-bottom: 0.2em;
			}
		}
	}
</style>

<script>
export default {
	name: 'ConfigurationForm',
	data() {
		return {
			time: {
				hours: '00',
				minutes: '05',
				seconds: '00'
			},
			font: {
				size: 180
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
		},

		fontSize: {
			get() {
				return this.font.size
			},

			set(value) {
				this.font.size = value
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
					query: { time: this.time, font: this.font }
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
