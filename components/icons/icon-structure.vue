<template>
	<icon
		iconName="structure"
		:width="width"
		:height="height"
		:viewBox="`0 0 ${width} ${height}`"
		iconColor="none"
	>
		<path
			d="M123 79.8L118.259 76.2C117.234 75.4211 115.986 75 114.704 75C113.422 75 112.174 75.4211 111.148 76.2L106.407 79.8C105.382 80.5789 104.134 81 102.852 81C101.57 81 100.322 80.5789 99.2963 79.8L94.5556 76.2C93.5298 75.4211 92.2822 75 91 75C89.7178 75 88.4702 75.4211 87.4444 76.2L82.7037 79.8C81.6779 80.5789 80.4303 81 79.1481 81C77.866 81 76.6183 80.5789 75.5926 79.8L70.8518 76.2C69.8261 75.4211 68.5785 75 67.2963 75C66.0141 75 64.7665 75.4211 63.7407 76.2L59 79.8"
			:stroke="waterColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M123 63.8L118.259 60.2C117.234 59.4211 115.986 59 114.704 59C113.422 59 112.174 59.4211 111.148 60.2L106.407 63.8C105.382 64.5789 104.134 65 102.852 65C101.57 65 100.322 64.5789 99.2963 63.8L94.5556 60.2C93.5298 59.4211 92.2822 59 91 59C89.7178 59 88.4702 59.4211 87.4444 60.2L82.7037 63.8C81.6779 64.5789 80.4303 65 79.1481 65C77.866 65 76.6183 64.5789 75.5926 63.8L70.8518 60.2C69.8261 59.4211 68.5785 59 67.2963 59C66.0141 59 64.7665 59.4211 63.7407 60.2L59 63.8"
			:stroke="waterColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M123 47.8L118.259 44.2C117.234 43.4211 115.986 43 114.704 43C113.422 43 112.174 43.4211 111.148 44.2L106.407 47.8C105.382 48.5789 104.134 49 102.852 49C101.57 49 100.322 48.5789 99.2963 47.8L94.5556 44.2C93.5298 43.4211 92.2822 43 91 43C89.7178 43 88.4702 43.4211 87.4444 44.2L82.7037 47.8C81.6779 48.5789 80.4303 49 79.1481 49C77.866 49 76.6183 48.5789 75.5926 47.8L70.8518 44.2C69.8261 43.4211 68.5785 43 67.2963 43C66.0141 43 64.7665 43.4211 63.7407 44.2L59 47.8"
			:stroke="waterColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<rect
			x="1"
			y="1"
			width="86"
			height="86"
			rx="43"
			:fill="backgroundColor"
			:stroke="iconColor"
			stroke-width="2"
		/>
		<path
			d="M20 34.7051H68V41.5569H20V34.7051Z"
			:stroke="iconColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M64.5716 34.7037C64.5716 27.8518 54.2859 21 44.0002 21C33.7144 21 23.4287 27.8518 23.4287 34.7037"
			:stroke="iconColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M20 58.6841H68V65.5359H20V58.6841Z"
			:stroke="iconColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M23.4287 41.5576V58.6872"
			:stroke="iconColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M30.2861 41.5576V58.6872"
			:stroke="iconColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M37.1465 41.5576V58.6872"
			:stroke="iconColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M50.8604 41.5576V58.6872"
			:stroke="iconColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M64.5723 41.5576V58.6872"
			:stroke="iconColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
		<path
			d="M57.7139 41.5576V58.6872"
			:stroke="iconColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		/>
	</icon>
</template>

<script>
import icon from '@/components/icons/icon.vue'

export default {
	name: 'icon-strucure',
	components: { icon },
	props: {
		width: {
			type: [Number, String],
			default: 124,
		},
		height: {
			type: [Number, String],
			default: 88,
		},
		iconColor: {
			type: String,
			default: 'currentColor',
		},
		backgroundColor: {
			type: String,
			default: '#F8F0F2',
		},
		waterColor: {
			type: String,
			default: '#C38765',
		},
	},
}
</script>
