<template>
	<div class="content">
		<section class="constrain">
			<h2 class="text-light mt-20">For Agents & Partners</h2>
		</section>
		<section class="bg-angle--right pb-32">
			<div class="mt-40 flex constrain">
				<div class="w-1/4"></div>
				<card no="1" title="Jurisdictions" icon="IconStructure"></card>
				<card no="2" title="Legal Consultancy" icon="IconScale"></card>
				<card
					no="3"
					title="Business Consultancy"
					icon="IconArrow"
				></card>
			</div>
		</section>
		<section-header
			title="Our Locations & Jurisdictions"
			subtitle="Global Reach"
		/>
		<section class="bg-secondary-200">
			<jurisdictions class="constrain py-40" />
		</section>
	</div>
</template>

<script>
import SectionHeader from '@/components/section-header'
import Jurisdictions from '@/components/jurisdictions'
export default {
	components: { SectionHeader, Jurisdictions },
}
</script>

<style lang="scss" scoped>
.content-wrapper {
	background: url('/images/agents-bg.jpg') no-repeat center top;
}
</style>
