<template>
	<div class="content">
		<section class="constrain text-light">
			<h2 class="mt-20 max-w-full pb-40">Estonia</h2>
		</section>
		<section class="bg-secondary-200 constrain--large">
			<div class="constrain p-40 pb-0">
				<h3 class="tall wide mb-20">
					Estonia belongs to the European Union, which offers several
					benefits for opening a company including effective
					legislation and easier access to funding.
				</h3>
				<div class="flex mb-20">
					<div class="font-body w-5/12">
						<p class="mb-8">
							requires corporations to pay taxes only on their
							distributed dividends. In addition to no corporate
							tax (unless there is a dividend), there is no VAT
							for transactions performed outside the EU territory
							as well as no income tax up until a certain salary
							amount.
						</p>
						<p class="mb-8">
							Due to its tax system, Estonia is an ideal place for
							new start-ups and tech companies that are focused on
							business growth as companies will not pay any taxes
							for the money they earn or re-invest.
						</p>
						<p>
							Valkon Group will provide expert advice in regards
							to registering your company in Estonia, while
							assessing all advantages and disadvantages for your
							particular business.
						</p>
					</div>
					<div
						class="booklet-preview bg-secondary-300 w-5/12 ml-auto p-12 text-light relative"
					>
						<h3 class="tracking-wide">
							How to set up<br />
							your business <br />
							in Estonia
						</h3>

						<div
							class="absolute bottom-0 right-0 pb-8 pr-8 flex items-center"
						>
							<IconValkon width="71" class="mr-2" />
							<IconMark height="48" />
						</div>
					</div>
				</div>
				<div class="flex border-b-2 border-primary-200 pb-20">
					<p class="w-5/12">
						To request a brochure with the Company Key Facts and How
						to Set Up Your Business in Estonia, please submit your
						email here.
					</p>
					<div class="ml-auto w-5/12">
						<form>
							<input
								type="text"
								placeholder="Insert your email address"
							/>
							<s-button
								text="Request a brochure"
								type="outline"
								class="w-full"
							/>
						</form>
					</div>
				</div>
			</div>
		</section>
		<section class="bg-secondary-200 constrain--large">
			<jurisdictions class="constrain py-40" active="estonia" />
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
import SectionHeader from '@/components/section-header'
import Jurisdictions from '@/components/jurisdictions'
import Card from '@/components/card'
import SButton from '@/components/button'
import IconValkon from '@/components/icons/icon-valkon'
import IconMark from '@/components/icons/icon-mark'

export default {
	components: {
		SectionHeader,
		Jurisdictions,
		Card,
		SButton,
		IconValkon,
		IconMark,
	},
}
</script>

<style lang="scss" scoped>
.content-wrapper,
.booklet-preview {
	background: url('/images/clients-bg.jpg') no-repeat center top;
}
</style>
