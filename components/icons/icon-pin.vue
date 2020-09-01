<template>
	<icon
		iconName="pin"
		:width="width"
		:height="height"
		:viewBox="`0 0 ${width} ${height}`"
		iconColor="none"
	>
		<path
			d="M9 25L15.6566 14.7915C16.5339 13.4487 17.0015 11.8697 17 10.2548V9.17928C17 7.01 16.1571 4.92957 14.6569 3.39565C13.1566 1.86174 11.1217 1 9 1C6.87827 1 4.84344 1.86174 3.34315 3.39565C1.84286 4.92957 1 7.01 1 9.17928V10.2548C0.998499 11.8698 1.46613 13.4488 2.34359 14.7917L9 25ZM6.33334 9.17928C6.33334 8.45618 6.61429 7.76271 7.11438 7.2514C7.61448 6.7401 8.29276 6.45285 9 6.45285C9.70725 6.45285 10.3855 6.7401 10.8856 7.2514C11.3857 7.76271 11.6667 8.45618 11.6667 9.17928V10.2548C11.6671 10.7931 11.5113 11.3194 11.2189 11.7671L9 15.17L6.78125 11.7672C6.48878 11.3195 6.33289 10.7932 6.33334 10.2548V9.17928Z"
			:stroke="iconColor"
			stroke-width="1.5"
		/>
	</icon>
</template>

<script>
import icon from '@/components/icons/icon.vue'

export default {
	name: 'icon-pin',
	components: { icon },
	props: {
		width: {
			type: [Number, String],
			default: 18,
		},
		height: {
			type: [Number, String],
			default: 27,
		},
		iconColor: {
			type: String,
			default: 'currentColor',
		},
	},
}
</script>
