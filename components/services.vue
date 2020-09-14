<template>
	<div class="constrain flex lg:justify-around flex-col lg:flex-row">
		<card
			no="1"
			title="Company Formation: Jurisdictions"
			:icon="'IconStructure'"
			description="We’ll analyze the current geopolitical landscape and
				financial laws to determine the best jurisdictions and
				countries to incorporate your businesses."
		/>
		<card
			no="2"
			title="Company Management"
			:icon="'IconArrow'"
			description="We’ll analyze the current geopolitical landscape and
				financial laws to determine the best jurisdictions and
				countries to incorporate your businesses."
		/>
		<card
			no="3"
			title="Legal & Business Consultancy"
			:icon="'IconScale'"
			description="We’ll analyze the current geopolitical landscape and
				financial laws to determine the best jurisdictions and
				countries to incorporate your businesses."
		/>
		<card
			no="4"
			title="Lifestyle & Relocation"
			:icon="'IconGlobe'"
			description="We’ll analyze the current geopolitical landscape and
				financial laws to determine the best jurisdictions and
				countries to incorporate your businesses."
		/>
	</div>
</template>

<script>
import card from '@/components/card'
export default {
	components: { card },
}
</script>
