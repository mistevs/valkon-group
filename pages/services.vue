<template>
	<div class="content">
		<section class="constrain text-light">
			<h2 class="mt-20 max-w-full pb-40">Services</h2>
		</section>
		<section class="bg-secondary-200 constrain--large"></section>
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
