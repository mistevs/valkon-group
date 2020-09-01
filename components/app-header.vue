<template>
	<header class="py-6 w-full" :class="{ 'header--light': isLightHeader }">
		<div class="crown constrain font-body tracking-less mb-12">
			<ul class="crown__language flex items-center text-sm font-semibold">
				<li>
					<a class="pr-3 border-r border-secondary-300" href="">EN</a>
				</li>
				<li><a class="pl-3" href="">RU</a></li>
				<li class="ml-auto">
					<nuxt-link
						to="/social-responsibilities"
						class="crown__social-responsibility"
						>Social Responsibility</nuxt-link
					>
				</li>
			</ul>
		</div>
		<nav class="constrain font-semibold">
			<ul class="flex items-center tracking-wide">
				<li class="mr-8">
					<nuxt-link to="/" class="flex items-center"
						><IconValkon class="mr-3" />
						<IconMark
							:class="{
								'text-highlight': !isLightHeader,
								'text-secondary-200': isLightHeader,
							}"
						/>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/agencies-partners" class="px-8"
						>For Agencies & Partners</nuxt-link
					>
				</li>
				<li>
					<nuxt-link to="/private-clients" class="px-8"
						>For Private Clients</nuxt-link
					>
				</li>
				<li class="ml-auto relative has-dropdown">
					<nuxt-link to="/services" class="px-8">Services</nuxt-link>
					<ul
						class="dropdown absolute top-0 bg-secondary-200 border-4 border-secondary-300 shadow text-primary-100 font-normal"
					>
						<li>
							<nuxt-link
								to="/jurisdictions/"
								class="px-8 py-2 inline-block border-b-2 border-secondary-300"
								>Jurisdictions</nuxt-link
							>
						</li>
						<li>
							<nuxt-link
								to="/jurisdictions/"
								class="px-8 py-2 inline-block border-b-2 border-secondary-300"
								>Jurisdictions</nuxt-link
							>
						</li>
						<li>
							<nuxt-link
								to="/jurisdictions/"
								class="px-8 py-2 inline-block"
								>Jurisdictions</nuxt-link
							>
						</li>
					</ul>
				</li>
				<li>
					<nuxt-link to="/about" class="px-8">About</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/contact" class="px-8 pr-0"
						>Contact</nuxt-link
					>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss">
header.header--light {
	@apply text-secondary-200;
}

nav > ul > li {
	//logo
	&:first-child {
		&:hover {
			svg {
				@apply text-highlight;

				transition: all 0.5s ease;
			}
		}
	}

	//normal nav
	&:not(:first-child):not(.has-dropdown) > a {
		@apply relative;

		&.nuxt-link-active,
		&:hover {
			&::after {
				width: 30px;
			}
		}

		&::after {
			@apply absolute bg-highlight;

			content: ' ';

			width: 0px;
			height: 2px;
			top: calc(100% + 0.75rem);
			left: 50%;

			transform: translateX(-50%);
			transition: all 0.5s ease;
		}
	}
}
</style>

<script>
import IconValkon from '@/components/icons/icon-valkon'
import IconMark from '@/components/icons/icon-mark'

export default {
	components: { IconValkon, IconMark },
	computed: {
		isLightHeader() {
			return this.$route.name !== 'index'
		},
	},
}
</script>
