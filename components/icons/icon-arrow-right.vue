<template>
	<icon
		iconName="arrow right"
		:width="width"
		:height="height"
		:viewBox="`0 0 20 18`"
		iconColor="none"
	>
		<path
			d="M1 9H18.066"
			:stroke="iconColor"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M10.1025 17L18.0667 9L10.1025 1"
			:stroke="iconColor"
			:stroke-width="strokeWidth"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</icon>
</template>

<script>
import icon from '@/components/icons/icon.vue'

export default {
	name: 'icon-arrow-right',
	components: { icon },
	props: {
		width: {
			type: [Number, String],
			default: 20,
		},
		height: {
			type: [Number, String],
			default: 18,
		},
		iconColor: {
			type: String,
			default: 'currentColor',
		},
		strokeWidth: {
			type: Number,
			default: 2,
		},
	},
}
</script>
