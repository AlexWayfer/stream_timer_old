<template>
	<form @submit="submit">
		<fieldset>
			<legend>Text before</legend>

			<input size="10" v-model="textBefore" required />
		</fieldset>

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

			<label>
				<span>Seconds:</span>
				<input size="2" v-model="seconds" @input="inputHandler" required />
			</label>
		</fieldset>

		<fieldset>
			<legend>Style</legend>

			<fieldset>
				<legend>Background</legend>

				<label>
					<span>Color:</span>
					<input type="color" v-model="backgroundColor" required />
				</label>

				<label>
					<span>Opacity:</span>
					<input
						type="range"
						min="0"
						max="1"
						step="0.05"
						v-model="backgroundOpacity"
						required
					/>
					<span>{{ background.opacity | opacity }}</span>
				</label>
			</fieldset>

			<fieldset>
				<legend>Font</legend>

				<label>
					<span>Size:</span>
					<input size="2" v-model="fontSize" required />
				</label>

				<label>
					<span>Color:</span>
					<input type="color" v-model="fontColor" required />
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
				before: 'AFK'
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
		},

		textBefore: {
			get() {
				return this.text.before
			},

			set(value) {
				this.text.before = value
			}
		},

		backgroundColor: {
			get() {
				return this.background.color
			},

			set(value) {
				this.background.color = value
			}
		},

		backgroundOpacity: {
			get() {
				return this.background.opacity
			},

			set(value) {
				this.background.opacity = value
			}
		},

		fontSize: {
			get() {
				return this.font.size
			},

			set(value) {
				this.font.size = value
			}
		},

		fontColor: {
			get() {
				return this.font.color
			},

			set(value) {
				this.font.color = value
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
