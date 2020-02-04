<template>
	<div class="timer">
		<span>{{
			hours | padding
		}}</span>:<span>{{
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
		time: Object
	},
	data() {
		return {
			hours: this.time.hours,
			minutes: this.time.minutes,
			seconds: this.time.seconds,
			interval: null
		}
	},
	filters: {
		padding(value) {
			return value.toString().padStart(2, '0')
		}
	},
	methods: {
		countdown() {
			console.debug('countdown!')
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
