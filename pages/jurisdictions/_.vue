<template>
	<div class="content">
		<section class="constrain text-light">
			<h2 class="mt-20 max-w-full pb-40">{{ jurisdiction.title }}</h2>
		</section>
		<section class="bg-secondary-200 constrain--large">
			<jurisdiction-description
				:title="jurisdiction.title"
				:description="jurisdiction.description"
				:excerpt="jurisdiction.excerpt"
			/>
		</section>
		<section class="bg-secondary-200 constrain--large">
			<jurisdictions
				class="constrain py-12 lg:pt-0 lg:pb-20"
				:active="$route.params.pathMatch"
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

export default {
	components: {
		Jurisdictions,
		Card,
	},
	computed: {
		jurisdiction() {
			return this.jurisdictions[this.$route.params.pathMatch]
		},
	},
	// eslint-disable-next-line
	data() {
		return {
			jurisdictions: {
				estonia: {
					title: 'Estonia',
					excerpt:
						'Estonia belongs to the European Union, which offers several benefits for opening a company including effective legislation and easier access to funding. ',
					description: `
					<p>The main advantage for starting your business in Estonia is its tax system which requires corporations to pay taxes only on their distributed dividends. In addition to no corporate tax (unless there is a dividend), there is no VAT for transactions performed outside  the EU territory as well as no income tax up until a certain salary amount.</p>
					<p>Due to its tax system, Estonia is an ideal place for new start-ups and tech companies that are focused on business growth as companies will not pay any taxes for the money they earn or re-invest.</p>
					<p>Valkon Group will provide expert advice in regards to registering your company in Estonia, while assessing all advantages and disadvantages for your particular business.</p>
					`,
				},
				switzerland: {
					title: 'Switzerland',
					excerpt:
						'Switzerland is the most sought-after country for starting a business due to its political and economic stability, central European location and liberal legal framework. ',
					description: `
					<p>Despite being a small country, Switzerland has headquarters of more than 6,500 foreign companies, including several Fortune 500 companies. The key advantages of opening a Swiss company include low taxation, no capital requirement and a relatively easy and fast set-up process. </p>
					<p>As a result of the Swiss tax reform (TRAF) that entered into force on January 1, 2020, companies are subject to tax rates that range between 11.9% and 25%, but dividends and capital gains from shareholdings are entitled to participation relief, which means that taxes are significantly reduced or nearly eliminated with such gains. </p>
					<p>Tax planning is vital in order to benefit from various advantages offered by the Swiss taxation system. Valkon Group specialises in the set-up and management of Swiss companies and will provide expert advice and manage the set-up process in a professional and efficient manner.</p>
					`,
				},
				'united-arab-emirates': {
					title: 'United Arab Emirates',
					excerpt:
						'The UAE offers multiple advantages for opening a business including its strategic location between the East and West, common law framework, supportive infrastructure, excellent banking services and its tax-friendly regime. The corporate tax, capital gains tax and personal income tax rates in the UAE stand at 0%.',
					description: `
					<p>The UAE has treaties on avoidance of double taxation with 50 countries in the world and can offer company formation in free trade zones (FTZ). One of the most future-oriented and young FTZ is the free trade zone of Ras Al Khaimah which is 15 years old. The oldest UAE FTZ is Jebel Ali in Dubai where the companies along with their owners can benefit from obtaining a local residency, a straightforward process with no “long stay” requirements. To find out more about UAE residentship, please click here.</p>
					<p class="mb-0">UAE also allows incorporation of offshore companies which are ideally suited for the following purposes:</p>
					<ul>
						<li>Share interest in a company (especially in an onshore company);</li>
						<li>Formation of a holding company;</li>
						<li>International trading;</li>
						<li>Registration of yachts and ships abroad;</li>
						<li>Ownership of copyrights, patents and other intellectual property.</li>
					</ul>
					<p>The Valkon Group  team in Dubai will meet your needs from initial assessment to business structuring including company formation and management. </p>`,
				},
				'united-kingdom': {
					title: 'United Kingdom',
					excerpt:
						'The UK provides an ideal location for new businesses due to the strength of the UK economy as well as a strong, favorable reputation for UK companies globally.',
					description: `
					<p>One of the biggest advantages to opening a UK company is a significant reduction in corporation tax, which is currently set at 19%. Suitable structuring will also guarantee significant earnings savings for international companies and high net worth individuals.</p>
					<p>Another advantage is a company can be established within only a few hours while keeping the setting up and annual corporate administration costs  minimal compared to many other countries.</p>
					<p>As a UK firm, Valkon Group provides UK corporate, domiciliary, administrative and accounting services to UK companies. Valkon Group experts will ensure that your new company remains compliant under the UK regulations.</p>`,
				},
				'british-virgin-islands': {
					title: 'British Virgin Islands (BVI)',
					excerpt:
						'The British Virgin Islands (BVI) are a British overseas territory in the Caribbean that consists of the main islands of Tortola, Virgin Gorda, Anegada, and Jost Van Dyke, along with over 50 other smaller islands.',
					description: `
					<p>Since the establishment of the BVI International Business Companies Act in 1984, the BVI has been permitted to incorporate International Business Companies (IBCs) within its territories. The Act played a major role in growing the BVI financial sector which now produces over 50% of total government revenue.</p>
					<p>The BVI is attractive to foreign investors as it offers no capital gains tax, sales tax or VAT, and no dividends, interest or royalties are required to be paid.</p>
					<p>Individuals in the British Virgin Islands pay no income tax, wealth tax, inheritance or gift taxes. There are also no land or housing taxes. The payroll tax is between 10% and 14% and split between employer and employee. </p>
					<p>The government of the British Virgin Islands is known for being stable and established. The law in the territory is based on British Сommon Law and the official business language is English.</p>
					<p>Valkon Group has extensive experience establishing new businesses in the British Virgin Islands and is well suited to provide expert advice for your company.</p>
					`,
				},
				seychelles: {
					title: 'Seychelles',
					excerpt:
						'The Seychelles, officially known as the Republic of the Seychelles, are a cluster of 115 islands in the Indian Ocean.',
					description: `
					<p>With the establishment of the International Business Companies Act in 1994, the Seychelles has become a sought-after financial services jurisdiction, specialising in international business company incorporations.</p>
					<p>The Seychelles is an independent jurisdiction and is known for its privacy and confidentiality laws. It is also known for its political and economic stability which are equally important for the success of a business.</p>
					<p>The country has a territorial tax system: profits are only taxed if they are derived or deemed to be derived from a source in the Seychelles. Zero taxation also applies to capital gains, dividends, interest, and stamp duties on business transactions.</p>
					<p>International business companies are subject to relaxed statutory requirements including no minimum capital requirements and no residency requirement. </p>
					<p>Valkon Group has extensive experience of international and offshore structures and will present our clients with the best opportunities that suit their needs.</p>
					`,
				},
				singapore: {
					title: 'Singapore',
					excerpt:
						'Singapore, officially the Republic of Singapore, is a sovereign island city-state in maritime Southeast Asia that is known for its political and economic stability in the region.',
					description: `
					<p>Singapore is considered a global hub for finance primarily due to its tax benefits that include a single-tier taxation system, no tax on overseas income, no capital gains or dividend tax, and no tax on assets from inheritance or gifts. Singapore also offers avoidance of Double Taxation Agreements (DTA) between Singapore and other jurisdictions which serve to relieve double taxation of income that is earned in one jurisdiction by a resident of the other jurisdiction.</p>
					<p>Valkon Group has a deep understanding of our client’s needs and will offer the best solutions to benefit their business. To discuss how Valkon Group can help your business in Singapore, please see below.</p>
					`,
				},
			},
		}
	},
}
</script>

<style lang="scss" scoped>
.content-wrapper.estonia {
	&,
	::v-deep .booklet-preview {
		background-image: url('/images/jurisdictions/backgrounds/estonia.jpg');
	}
}
.content-wrapper.switzerland {
	&,
	::v-deep .booklet-preview {
		background-image: url('/images/jurisdictions/backgrounds/switzerland.jpg');
	}
}
.content-wrapper.united-arab-emirates {
	&,
	::v-deep .booklet-preview {
		background-image: url('/images/jurisdictions/backgrounds/uae.jpg');
	}
}
.content-wrapper.british-virgin-islands {
	&,
	::v-deep .booklet-preview {
		background-image: url('/images/jurisdictions/backgrounds/bvi.jpg');
	}
}
.content-wrapper.seychelles {
	&,
	::v-deep .booklet-preview {
		background-image: url('/images/jurisdictions/backgrounds/seychelles.jpg');
	}
}
.content-wrapper.singapore {
	&,
	::v-deep .booklet-preview {
		background-image: url('/images/jurisdictions/backgrounds/singapore.jpg');
	}
}
.content-wrapper.united-kingdom {
	&,
	::v-deep .booklet-preview {
		background-image: url('/images/jurisdictions/backgrounds/uk.jpg');
	}
}
</style>
