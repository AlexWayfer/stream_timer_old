<template>
	<form @submit="submit">
		<fieldset>
			<legend>Text</legend>

			<fieldset>
				<legend>Countdown</legend>

				<label>
					<span>Before:</span>
					<input size="10" v-model="text.countdown.before" required />
				</label>
			</fieldset>

			<fieldset>
				<legend>Lateness</legend>

				<label>
					<span>Before:</span>
					<input size="10" v-model="text.lateness.before" required />
				</label>
			</fieldset>
		</fieldset>

		<fieldset>
			<legend>Time</legend>

			<label>
				<span>Hours:</span>
				<input type="number" v-model="hours" min="0" size="2" required />
			</label>

			<label>
				<span>Minutes:</span>
				<input
					type="number"
					v-model="minutes"
					@input="inputHandler"
					min="0"
					max="59"
					size="2"
					required
				/>
			</label>

			<label>
				<span>Seconds:</span>
				<input
					type="number"
					v-model="seconds"
					@input="inputHandler"
					min="0"
					max="59"
					size="2"
					required
				/>
			</label>
		</fieldset>

		<fieldset>
			<legend>Style</legend>

			<fieldset>
				<legend>Background</legend>

				<label>
					<span>Color:</span>
					<input type="color" v-model="background.color" required />
				</label>

				<label>
					<span>Opacity:</span>
					<input
						type="range"
						min="0"
						max="1"
						step="0.05"
						v-model="background.opacity"
						required
					/>
					<span>{{ background.opacity | opacity }}</span>
				</label>
			</fieldset>

			<fieldset>
				<legend>Font</legend>

				<label>
					<span>Size:</span>
					<input size="2" v-model="font.size" required />
				</label>

				<label>
					<span>Color:</span>
					<input type="color" v-model="font.color" required />
				</label>
			</fieldset>
		</fieldset>

		<p>
			<button type="submit">Open timer</button>
		</p>
	</form>
</template>

<style>
	fieldset {
		margin: 0.4em;

		> label {
			display: table-row;
			/* padding: 0.4em 0; */

			> span,
			> input {
				display: table-cell;
				padding: 0 0.4em;
				vertical-align: middle;
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
			text: {
				countdown: {
					before: 'AFK '
				},
				lateness: {
					before: 'Late for '
				}
			},
			background: {
				color: '#ffffff',
				opacity: 0
			},
			font: {
				size: 160,
				color: '#000000'
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

	filters: {
		opacity(value) {
			return Number(value).toFixed(2)
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
			const routeData = this.$router.resolve(
				{
					name: 'timer',
					query: {
						time: this.time,
						text: this.text,
						font: this.font,
						background: this.background
					}
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
