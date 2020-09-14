<template>
	<div
		class="flex lg:items-center justify-between flex-wrap"
		:class="{ 'jurisdictions--large': type === 'large' }"
	>
		<jurisdiction
			title="estonia"
			link="estonia"
			image="/images/jurisdictions/icons/estonia.png"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="Switzerland"
			link="switzerland"
			image="/images/jurisdictions/icons/switzerland.png"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="United Arab Emirates (UAE)"
			link="united-arab-emirites"
			image="/images/jurisdictions/icons/uae.png"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="United Kingdom (UK)"
			link="united-kingdom"
			image="/images/jurisdictions/icons/uk.png"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="British Virgin Islands (BVI)"
			link="british-virgin-islands"
			image="/images/swiss-bg.jpg"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="Seychelles"
			link="seychelles"
			image="/images/swiss-bg.jpg"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="Singapore"
			link="singapore"
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

.jurisdiction:last-child {
	@apply mb-0;
}
</style>
