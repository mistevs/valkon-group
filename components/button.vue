<template>
	<nuxt-link
		:to="to"
		class="button"
		:class="{
			'button--filled': type === 'filled',
			'button--outline': type === 'outline',
		}"
	>
		{{ text }}
	</nuxt-link>
</template>

<script>
export default {
	props: {
		text: String,
		type: { type: String, default: 'filled' },
		to: { type: String, default: '' },
	},
}
</script>

<style lang="scss">
@import 'button';
</style>
