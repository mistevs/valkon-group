<template>
	<div>
		<div class="content">
			<section class="flex constrain">
				<div class="content--left">
					<h1>More than money</h1>
					<h3 class="mt-16">
						Our suite of corporate services for startups and
						companies ensures you are ready to expand globally
					</h3>
					<div class="mt-16">
						<s-button
							text="For Agents & Partners"
							type="filled"
						/><br />
						<s-button
							text="For Private Clients"
							type="outline"
							class="mt-3"
						/>
					</div>
				</div>
				<div class="content--right ml-auto relative">
					<IconMarkLarge
						waterColor="#C38765"
						iconColor="#C38765"
						pinColor="#C38765"
					/>
				</div>
			</section>
			<section class="flex mt-56 constrain">
				<div class=""></div>
				<div class="ml-auto flex items-end">
					<IconPin />
					<div class="pl-6 ml-6 border-l-2">
						<p class="font-semibold text-sm mt-24">
							Featured Jurisdiction
						</p>
						<h3 class="font-medium">
							Switzerland <IconArrowRight />
						</h3>
					</div>
				</div>
			</section>
			<section class="bg-angle--right mt-56 pb-32">
				<div class="constrain flex justify-around">
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
			</section>
		</div>
	</div>
</template>

<script>
import SButton from '@/components/button'
import IconMarkLarge from '@/components/icons/icon-mark-large'
import IconPin from '@/components/icons/icon-pin'
import IconArrowRight from '@/components/icons/icon-arrow-right'

import Card from '@/components/card'

export default {
	components: {
		SButton,
		IconMarkLarge,
		IconPin,
		IconArrowRight,
		Card,
	},
}
</script>

<style lang="scss" scoped>
.content-wrapper {
	background: url('/images/swiss-bg.jpg') no-repeat center top;
}

.content--right {
	svg {
		@apply absolute;

		top: -40px;
		right: -120px;
	}
}
</style>
