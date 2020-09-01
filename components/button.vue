<template>
	<a
		href=""
		class="button"
		:class="{
			'button--filled': type === 'filled',
			'button--outline': type === 'outline',
		}"
	>
		{{ text }}
	</a>
</template>

<script>
export default {
	props: { text: String, type: { type: String, default: 'filled' } },
}
</script>

<style lang="scss">
@import 'button';
</style>
