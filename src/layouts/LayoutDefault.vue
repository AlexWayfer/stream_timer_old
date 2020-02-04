<template>
	<div class="layout">
		<div id="nav">
			<router-link to="/">Configuration</router-link>
			|
			<router-link to="/about">About</router-link>
		</div>

		<slot />
	</div>
</template>

<style>
	#nav {
		font-weight: bold;
		margin-bottom: 0.5em;
	}

	#nav a {
		display: inline-block;
		color: blue;

		&.router-link-exact-active {
			color: black;
			text-decoration: none;
		}
	}
</style>
