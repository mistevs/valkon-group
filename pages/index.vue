<template>
	<div>
		<div class="content">
			<section class="flex constrain flex-col lg:flex-row px-6 xl:px-0">
				<div class="content--left">
					<h1>More than money</h1>
					<h3 class="mt-16">
						Our suite of corporate services for <br />startups and
						companies ensures <br />you are ready to expand globally
					</h3>
					<div class="mt-16">
						<s-button
							text="For Agents & Partners"
							type="filled"
							to="/agencies-partners"
						/><br />
						<s-button
							text="For Private Clients"
							type="outline"
							to="/private-clients"
							class="mt-3"
						/>
					</div>
				</div>
				<div class="content--right lg:ml-auto relative">
					<IconMarkLarge
						water-color="#C38765"
						icon-color="#C38765"
						pin-color="#C38765"
						width="500"
						height="500"
					/>
				</div>
			</section>
			<section
				class="hidden lg:flex mt-0 lg:mt-32 constrain px-6 lg:px-0"
			>
				<div class=""></div>
				<nuxt-link
					:to="`/jurisdictions/${jurisdictions[index].link}`"
					class="ml-auto flex items-end"
				>
					<IconPin class="jurisdiction__icon" />
					<div class="pl-6 ml-6 border-l-2 border-highlight">
						<p class="font-semibold text-sm mt-24">
							Featured Jurisdiction
						</p>
						<h3 class="font-regular jurisdiction__title">
							{{ jurisdictions[index].title }}
							<IconArrowRight />
						</h3>
					</div>
				</nuxt-link>
			</section>
			<section class="bg-angle--right mt-24 lg:mt-56 pb-32">
				<services />
			</section>
		</div>
	</div>
</template>

<script>
import SButton from '@/components/button'
import IconMarkLarge from '@/components/icons/icon-mark-large'
import IconPin from '@/components/icons/icon-pin'
import IconArrowRight from '@/components/icons/icon-arrow-right'
import Services from '@/components/services'

export default {
	components: {
		SButton,
		IconMarkLarge,
		IconPin,
		IconArrowRight,
		Services,
	},
	data: () => ({
		jurisdictions: [
			{
				title: 'Switzerland',
				link: 'switzerland',
			},
			{
				title: 'Estonia',
				link: 'estonia',
			},
			{
				title: 'United Arab Emirates',
				link: 'united-arab-emirates',
			},
			{
				title: 'United Kingdom',
				link: 'united-kingdom',
			},
			{
				title: 'British Virgin Islands (BVI)',
				link: 'british-virgin-islands',
			},
			{
				title: 'Seychelles',
				link: 'seychelles',
			},
			{
				title: 'Singapore',
				link: 'singapore',
			},
		],
		index: 0,
	}),
	mounted() {
		setInterval(() => {
			if (this.index + 1 > this.jurisdictions.length - 1) this.index = -1
			this.index++
		}, 1500)
	},
}
</script>

<style lang="scss" scoped>
.content-wrapper {
	background: url('/images/pages/swiss-bg.jpg') no-repeat center top;
}

.content--right {
	svg {
		@apply hidden;

		@screen md {
			@apply absolute block;
			right: 0;
			// right: -50px;
		}

		@screen xxl {
			// right: -150px;
			top: 0;

			// top: -40px;
			// right: -120px;
		}
	}
}

.jurisdiction__icon {
	margin-bottom: 30px;
}

.jurisdiction__title {
	width: 275px;
	height: 60px;
	flex: 0 0 auto;
}
</style>
