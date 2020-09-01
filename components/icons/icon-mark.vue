<template>
	<icon
		iconName="mark"
		:width="width"
		:height="height"
		viewBox="0 0 65 64"
		iconColor="none"
	>
		<path
			d="M44.7924 42.6654H48.9688V42.5943L36.9844 32.3905L48.4604 21.4046V21.3335H44.5019L34.4422 31.2173H34.1517V21.3335H30.8105V42.6654H34.1517V33.9193H34.4785L44.7924 42.6654Z"
			:fill="iconColor"
		/>
		<path
			d="M24.8659 32.4278C25.7343 34.7032 26.7835 37.2986 27.5433 39.4673L27.6518 42.6671H25.8066L16.9062 21.3352H20.4519L24.8659 32.4278Z"
			:fill="iconColor"
		/>
		<path
			d="M64.0003 32C64.0003 49.119 50.0949 63 32.9376 63C15.7804 63 1.875 49.119 1.875 32C1.875 14.881 15.7804 1 32.9376 1C50.0949 1 64.0003 14.881 64.0003 32Z"
			:stroke="iconColor"
			stroke-width="2"
		/>
	</icon>
</template>

<script>
import icon from '@/components/icons/icon.vue'

export default {
	name: 'icon-mark',
	components: { icon },
	props: {
		width: {
			type: [Number, String],
			default: 65,
		},
		height: {
			type: [Number, String],
			default: 64,
		},
		iconColor: {
			type: String,
			default: 'currentColor',
		},
	},
}
</script>
