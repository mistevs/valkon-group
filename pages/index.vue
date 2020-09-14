<template>
	<div>
		<div class="content">
			<section class="flex constrain flex-col lg:flex-row px-6 lg:px-0">
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
						width="50"
						height="50"
					/>
				</div>
			</section>
			<section class="flex mt-0 lg:mt-56 constrain px-6 lg:px-0">
				<div class=""></div>
				<nuxt-link to="/jurisdictions" class="ml-auto flex items-end">
					<IconPin />
					<div class="pl-6 ml-6 border-l-2 border-highlight">
						<p class="font-semibold text-sm mt-24">
							Featured Jurisdiction
						</p>
						<h3 class="font-medium">
							Switzerland <IconArrowRight />
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
}
</script>

<style lang="scss" scoped>
.content-wrapper {
	background: url('/images/pages/swiss-bg.jpg') no-repeat center top;
}

.content--right {
	svg {
		@screen lg {
			@apply absolute;

			top: -40px;
			right: -120px;
		}
	}
}
</style>
