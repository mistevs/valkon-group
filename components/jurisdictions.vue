<template>
	<div
		class="flex items-center justify-between"
		:class="{ 'jurisdictions--large': type === 'large' }"
	>
		<jurisdiction
			title="estonia"
			image="/images/swiss-bg.jpg"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="estonia1"
			image="/images/swiss-bg.jpg"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="estonia2"
			image="/images/swiss-bg.jpg"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="estonia3"
			image="/images/swiss-bg.jpg"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="estonia4"
			image="/images/swiss-bg.jpg"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="estonia5"
			image="/images/swiss-bg.jpg"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="estonia6"
			image="/images/swiss-bg.jpg"
			:active="active"
			:type="type"
		/>
	</div>
</template>

<script>
import Jurisdiction from '@/components/jurisdiction'
export default {
	components: { Jurisdiction },
	props: { active: { type: String, default: '' }, type: String },
}
</script>

<style lang="scss">
.jurisdictions {
	&--large {
		@apply flex-wrap justify-center;
	}
}
</style>
