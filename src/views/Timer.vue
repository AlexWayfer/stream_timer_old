<template>
	<div class="timer" v-bind:style="styleObject">
		{{ text.before }}
		<span v-if="hours > 0"><span>{{
			hours | padding
		}}</span>:</span><span>{{
			minutes | padding
		}}</span>:<span>{{
			seconds | padding
		}}</span>
	</div>
</template>

<script>
export default {
	name: 'Timer',
	props: {
		time: Object,
		text: Object,
		font: Object
	},
	data() {
		return {
			hours: this.time.hours,
			minutes: this.time.minutes,
			seconds: this.time.seconds,
			interval: null,
			styleObject: {
				fontSize: this.font.size + 'px'
			}
		}
	},
	filters: {
		padding(value) {
			return value.toString().padStart(2, '0')
		}
	},
	methods: {
		countdown() {
			// console.debug('countdown!')
			// console.debug(this.time)
			// console.debug(typeof this.time)
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
			}
		}
	},
	mounted() {
		// console.debug('Timer is mounted')
		this.interval = setInterval(this.countdown, 1000)
	}
}
</script>
