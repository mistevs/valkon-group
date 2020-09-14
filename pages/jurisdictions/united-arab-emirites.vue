<template>
	<div class="content">
		<section class="constrain text-light">
			<h2 class="mt-20 max-w-full pb-40">United Arab Emirates</h2>
		</section>
		<section class="bg-secondary-200 constrain--large">
			<jurisdiction-description />
		</section>
		<section class="bg-secondary-200 constrain--large">
			<jurisdictions
				class="constrain py-12 lg:pt-40 lg:pb-20"
				active="united-arab-emirites"
			/>
		</section>
		<section class="bg-secondary-200 pt-24 pb-40">
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
	</div>
</template>

<script>
import Jurisdictions from '@/components/jurisdictions'
import Card from '@/components/card'
import JurisdictionDescription from '@/components/jurisdiction-description'

export default {
	components: {
		Jurisdictions,
		Card,
		JurisdictionDescription,
	},
}
</script>

<style lang="scss" scoped>
.content-wrapper,
.booklet-preview {
	background-image: url('/images/jurisdictions/backgrounds/estonia.jpg');
}
</style>
