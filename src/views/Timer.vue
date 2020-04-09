<template>
	<div class="timer" v-bind:style="styleObject">
		<p>
			<span v-if="lateness">{{ text.lateness.before }}</span>
			<span v-else>{{ text.countdown.before }}</span>

			<span v-if="hours > 0"><span>{{
				hours | padding
			}}</span>:</span><span>{{
				minutes | padding
			}}</span>:<span>{{
				seconds | padding
			}}</span>
		</p>
	</div>
</template>

<style lang="postcss">
	.timer {
		width: 100vw;
		height: 100vh;

		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>

<script>
export default {
	name: 'Timer',
	props: {
		time: Object,
		text: Object,
		font: Object,
		background: Object
	},
	data() {
		return {
			hours: this.time.hours,
			minutes: this.time.minutes,
			seconds: this.time.seconds,
			interval: null,
			lateness: false
		}
	},
	computed: {
		styleObject: {
			get() {
				return {
					backgroundColor: this.backgroundColor,
					fontSize: this.font.size + 'px',
					color: this.font.color
				}
			}
		},
		opacityHex: {
			get() {
				return Math.floor(this.background.opacity * 255).toString(16)
			}
		},
		backgroundColor: {
			get() {
				return this.background.color + this.opacityHex
			}
		}
	},
	filters: {
		padding(value) {
			return value.toString().padStart(2, '0')
		}
	},
	methods: {
		countDown() {
			if (this.seconds > 0) {
				this.seconds--
			} else if (this.minutes > 0) {
				this.minutes--
				this.seconds = 59
			} else if (this.hours > 0) {
				this.hours--
				this.minutes = 59
				this.seconds = 59
			} else {
				clearInterval(this.interval)
				this.lateness = true
				this.seconds++
				this.interval = setInterval(this.countUp, 1000)
			}
		},

		countUp() {
			if (this.seconds === 59) {
				this.seconds = 0
				this.minutes++

				if (this.minutes === 59) {
					this.minutes = 0
					this.hours++
				}
			} else {
				this.seconds++
			}
		}
	},
	mounted() {
		// console.debug('Timer is mounted')
		this.interval = setInterval(this.countDown, 1000)
	}
}
</script>
