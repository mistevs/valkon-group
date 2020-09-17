<template>
	<nuxt-link
		:to="`/jurisdictions/${link}`"
		class="jurisdiction"
		:class="{
			'jurisdiction--active':
				active.toLowerCase() === link.toLowerCase().replace(' ', '-'),
			'jurisdiction--large': type === 'large',
		}"
	>
		<div class="relative">
			<img
				:src="`/images/jurisdictions/icons/${image}.png`"
				:srcset="`/images/jurisdictions/icons/${image}.png 1x, /images/jurisdictions/icons/${image}@2x.png 2x`"
			/>
			<IconArrowRight
				:width="type === 'large' ? 72 : 36"
				:height="type === 'large' ? 68 : 34"
				:stroke-width="type === 'large' ? 1 : 2"
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
	props: {
		image: String,
		link: String,
		title: String,
		active: String,
		type: String,
	},
}
</script>

<style lang="scss">
.jurisdiction {
	@apply opacity-75 flex-shrink-0 flex-grow-0 mb-24;
	max-width: 120px;
	transition: all 0.5s ease;

	@screen lg {
		@apply mb-0;

		max-width: 160px;
		height: 275px;
	}

	&:last-child {
		@apply mb-0;
	}

	&--active,
	&:hover {
		@apply opacity-100 relative;

		@screen lg {
			transform: translateY(-20%);
		}

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
		transform: translateX(-50%);
		transition: width 0.5s ease;

		@screen lg {
			bottom: -24px;
		}
	}

	img {
		@apply rounded-full bg-alt-100;

		width: 120px;
		height: 120px;

		@screen lg {
			width: 162px;
			height: 162px;
		}
	}

	&--large {
		@apply m-6;
		max-width: 150px;
		height: 250px;

		@screen lg {
			@apply mx-12 my-24;
			max-width: 302px;
			height: 400px;
		}

		img {
			width: 150px;
			height: 150px;

			@screen lg {
				width: 302px;
				height: 302px;
			}
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
