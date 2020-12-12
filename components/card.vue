<template>
	<div
		class="card"
		@click="flip()"
		:class="{ 'card--flippable': this.description }"
	>
		<div
			class="card__content"
			:class="{ 'card__content--flipped': flipped }"
		>
			<div class="card__content-face card__content-face--front">
				<div class="flex items-start">
					<h3 class="border-b border-highlight pb-1">No.</h3>
					<p class="no">{{ no }}</p>
				</div>
				<div class="flex-shrink-0 mt-24">
					<component :is="icon" />
					<h3 class="mt-12">{{ title }}</h3>
				</div>
			</div>
			<div
				class="card__content-face card__content-face--back flex flex-col h-full"
			>
				<div class="flex items-start">
					<h3 class="w-full whitespace-normal">{{ title }}</h3>
					<p class="no">{{ no }}</p>
				</div>
				<div class="mt-auto">
					<p class="font-body">
						{{ description }}
					</p>
					<s-button text="Click to Learn More" type="outline" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import IconStructure from '@/components/icons/icon-structure'
import IconArrow from '@/components/icons/icon-arrow'
import IconScale from '@/components/icons/icon-scale'
import IconGlobe from '@/components/icons/icon-globe'
import SButton from '@/components/button'

export default {
	components: { IconStructure, IconScale, IconArrow, IconGlobe, SButton },
	props: {
		no: [String, Number],
		title: String,
		icon: String,
		description: String,
	},
	data() {
		return {
			flipped: false,
		}
	},
	methods: {
		flip() {
			if (this.description) this.flipped = !this.flipped
		},
	},
}
</script>

<style lang="scss">
.card {
	@apply w-full mb-6;

	height: 400px;

	@screen lg {
		@apply mx-3 mb-0;
		width: 302px;
		height: 500px;
		perspective: 600px;
	}

	&--flippable {
		@apply cursor-pointer;

		.card__content-face {
			box-shadow: 0 0 15px -9px black;
			transition: box-shadow ease 0.3s;
			&:hover {
				box-shadow: 0 0 15px -4px black;
			}
		}
	}

	&:first-child {
		@apply ml-0;
	}

	&:last-child {
		@apply mr-0;
	}

	&__content {
		@apply w-full h-full relative;
		transition: transform 1s;
		transform-origin: center center;
		transform-style: preserve-3d;

		&-face {
			@apply absolute w-full h-full bg-secondary-200 py-9 px-6 flex flex-col border-4 border-secondary-300;

			border-width: 12px;
			border-radius: 4px;

			&--front,
			&--back {
				backface-visibility: hidden;
			}

			&--back {
				transform: rotateY(180deg);

				h3 {
					@apply relative z-10;
				}

				.no {
					@apply opacity-25;
				}

				.button {
					@apply block mt-6;

					width: auto;
					min-width: 0px;
				}
			}
		}

		&--flipped {
			transform: rotateY(180deg);
		}
	}
}

.no {
	@apply text-2xl font-light ml-auto absolute z-0;

	backface-visibility: hidden;
	top: 1.5rem;
	right: 1.5rem;
	line-height: 4.5rem;
}

h3 {
	@apply flex-shrink-0;
}
</style>
