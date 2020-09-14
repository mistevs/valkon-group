<template>
	<div
		class="bg-primary-200 relative py-12 lg:py-40 text-light overflow-hidden"
	>
		<div class="constrain">
			<h3>{{ subtitle }}</h3>
			<h2 class="mt-16 lg:mt-32">{{ title }}</h2>
		</div>
		<IconMarkLarge
			water-color="transparent"
			icon-color="#C38765"
			pin-color="#484862"
			circle-color="#484862"
			class="icon-mark-large absolute top-0 right-0"
		/>
	</div>
</template>

<script>
import IconMarkLarge from '@/components/icons/icon-mark-large'

export default {
	components: { IconMarkLarge },
	props: { title: String, subtitle: String },
}
</script>

<style lang="scss">
h2 {
	max-width: 490px;
	letter-spacing: calc(72px * 0.05);
}

.icon-mark-large {
	width: 400px;
	height: 400px;
	top: -150px;
	right: -150px;

	@screen lg {
		width: 1200px;
		height: 1200px;
		top: 50%;
		right: -450px;
		transform: translateY(-50%);
	}
}
</style>
