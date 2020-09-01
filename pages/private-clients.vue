<template>
	<div class="content">
		<section class="constrain text-light">
			<h2 class="mt-20 max-w-full">For Private Clients</h2>
			<h3 class="mt-40 text-big tracking-wide tall">
				Valkon takes a personal, long-term approach to learn about your
				personal and business goals and implements and manages a
				suitable corporate structure that will allow your businesses to
				scale.
			</h3>
		</section>
		<section class="bg-angle--left pb-32">
			<div class="mt-40 flex constrain">
				<card
					no="1"
					title="Company Formation & Management"
					icon="IconStructure"
				></card>
				<card
					no="2"
					title="Business & Legal Advice"
					icon="IconScale"
				></card>
				<card
					no="3"
					title="Accounting & Tax services"
					icon="IconArrow"
				></card>
				<card
					no="4"
					title="Lifestyle & Relocation"
					icon="IconGlobe"
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

		<section class="bg-secondary-200 pt-24 pb-16">
			<h3 class="constrain">Why work with us?</h3>
			<div class="flex constrain mt-24">
				<card
					no="1"
					title="Better prices, quick, and easy"
					icon="IconGlobe"
				></card>
				<card
					no="2"
					title="Self-service portal"
					icon="IconGlobe"
				></card>
				<card
					no="3"
					title="Dedicated success manager"
					icon="IconGlobe"
				></card>
				<card
					no="4"
					title="Secure, Private & Confidential"
					icon="IconGlobe"
				></card>
			</div>
		</section>
		<section class="py-24 bg-secondary-200">
			<h3 class="constrain">Our pricing</h3>
		</section>
	</div>
</template>

<script>
import SectionHeader from '@/components/section-header'
import Jurisdictions from '@/components/jurisdictions'
import Card from '@/components/card'
export default {
	components: { SectionHeader, Jurisdictions, Card },
}
</script>

<style lang="scss" scoped>
.content-wrapper {
	background: url('/images/clients-bg.jpg') no-repeat center top;
}
</style>
