<template>
	<nuxt-link
		:to="`/jurisdictions/${title.replace(' ', '-')}`"
		class="jurisdiction"
		:class="{
			'jurisdiction--active':
				active.toLowerCase() === title.toLowerCase().replace(' ', '-'),
			'jurisdiction--large': type === 'large',
		}"
	>
		<div class="relative">
			<img :src="image" />
			<IconArrowRight
				:width="type === 'large' ? 72 : 36"
				:height="type === 'large' ? 68 : 34"
				:strokeWidth="type === 'large' ? 1 : 2"
				class="icon-arrow"
			/>
		</div>
		<p class="text-center capitalize text-big mt-9">{{ title }}</p>
	</nuxt-link>
</template>

<script>
import IconArrowRight from '@/components/icons/icon-arrow-right'

export default {
	components: { IconArrowRight },
	props: { image: String, title: String, active: String, type: String },
}
</script>

<style lang="scss">
.jurisdiction {
	@apply opacity-75;
	transition: all 0.5s ease;

	&--active,
	&:hover {
		@apply opacity-100;

		transform: translateY(-20%);

		&::after {
			opacity: 1 !important;
			width: 30px !important;
		}
	}

	&::after {
		@apply absolute border-b-2 border-highlight opacity-0;

		content: ' ';
		width: 0px;
		left: 50%;
		bottom: -24px;
		transform: translateX(-50%);
		transition: width 0.5s ease;
	}

	img {
		@apply rounded-full;

		width: 162px;
		height: 162px;
	}

	&--large {
		@apply mx-24 my-24;

		img {
			width: 302px;
			height: 302px;
		}
	}
}

.icon-arrow {
	@apply absolute text-light;

	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}
</style>
