<template>
	<div
		class="flex lg:items-center justify-between flex-wrap"
		:class="{ 'jurisdictions--large': type === 'large' }"
	>
		<jurisdiction
			title="estonia"
			link="estonia"
			image="estonia"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="Switzerland"
			link="switzerland"
			image="switzerland"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="United Arab Emirates (UAE)"
			link="united-arab-emirates"
			image="uae"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="United Kingdom (UK)"
			link="united-kingdom"
			image="uk"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="British Virgin Islands (BVI)"
			link="british-virgin-islands"
			image="bvi"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="Seychelles"
			link="seychelles"
			image="seychelles"
			:active="active"
			:type="type"
		/>
		<jurisdiction
			title="Singapore"
			link="singapore"
			image="singapore"
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
