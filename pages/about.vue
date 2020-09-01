<template>
	<div class="content">
		<section class="constrain text-light">
			<h2 class="mt-20 max-w-full pb-40">About Us</h2>
		</section>
		<section class="bg-secondary-200 constrain--large">
			<div class="flex constrain p-40">
				<div class="w-5/12">
					<p class="mb-4">
						<span>D</span>oing business with Valkon Group means more
						than money - we guarantee trust and excellence. Our team
						would like to invite you to explore the wide range of
						services that Valkon Group offers for you to expand and
						maximise your business.
					</p>

					<p class="mb-4">
						Since 2008 we have been on the global market, helping
						companies achieve global scalability through company
						structure optimisation and expansion across a worldwide
						network of jurisdictions. Since the very beginning, we
						have held competency, integrity, transparency, and
						privacy as our core values.
					</p>

					<p>
						Our primary focus is to serve our clients and promote
						their financial success. In doing so, Valkon Group
						builds strong client relationships based on trust and
						service excellence with a personal touch. Our
						multi-language team has a long track record of global
						business consulting with in-depth knowledge of corporate
						structure, taxation, and international financial flows.
					</p>
				</div>
				<div class="flex flex-wrap w-5/12 ml-32">
					<div class="w-1/2 bg-secondary-300 p-9">
						<h2>12</h2>
						<p class="mt-4">Years in business</p>
					</div>
					<div class="w-1/2 p-9">
						<h2>12</h2>
						<p class="mt-4">Years in business</p>
					</div>
					<div class="w-1/2 p-9">
						<h2>12</h2>
						<p class="mt-4">Years in business</p>
					</div>
					<div class="w-1/2 bg-secondary-300 p-9">
						<h2>12</h2>
						<p class="mt-4">Years in business</p>
					</div>
					<div class="w-1/2 bg-secondary-300 p-9">
						<h2>12</h2>
						<p class="mt-4">Years in business</p>
					</div>
					<div class="w-1/2 p-9">
						<h2>12</h2>
						<p class="mt-4">Years in business</p>
					</div>
				</div>
			</div>
			<div class="flex constrain px-40">
				<h3 class="w-5/12 tracking-wide tall">
					Doing business with Valkon Group means more than money - we
					guarantee trust and excellence.
				</h3>

				<div class="w-5/12 ml-32">
					<p class="mb-4">
						Valkon Group specialises in the formation and management
						of companies in the UK and overseas. While headquartered
						in London, our teams are based locally in each of our
						jurisdictions allowing us to offer our clients from all
						over the globe a wide range of services that include:
						corporate administration, secretarial support,
						accounting, tax planning and business consulting, trust
						and foundation services, relocation and lifestyle.
					</p>

					<p>
						At Valkon Group, we are dedicated to understanding our
						clients’ individual needs in order to ensure that our
						clients will benefit from the best solutions tailored
						exclusively to their individual needs. We value
						long-term relationships with our clients; that is why
						our clients can rely on us to take exceptional care of
						their business.
					</p>
				</div>
			</div>
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
