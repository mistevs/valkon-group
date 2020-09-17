<template>
	<header
		class="py-6 w-full lg:px-0"
		:class="{ 'header--light': isLightHeader }"
	>
		<div class="crown constrain font-body tracking-less mb-12">
			<ul class="crown__language flex items-center text-sm font-semibold">
				<li>
					<a class="pr-3 border-r border-secondary-300" href="">EN</a>
				</li>
				<li><a class="pl-3" href="">RU</a></li>
				<li class="hidden lg:block ml-auto">
					<nuxt-link
						to="/social-responsibilities"
						class="crown__social-responsibility"
						>Social Responsibility</nuxt-link
					>
				</li>
				<li class="nav-toggle" @click="showNav = !showNav">
					{{ showNav ? 'X' : 'O' }}
				</li>
			</ul>
		</div>
		<nav
			class="constrain font-semibold lg:flex"
			:class="showNav ? '__showing' : ''"
		>
			<nuxt-link to="/" class="flex items-center mr-8"
				><IconValkon class="mr-3" />
				<IconMark
					:class="{
						'text-highlight': !isLightHeader,
						'text-secondary-200': isLightHeader,
					}"
				/>
			</nuxt-link>
			<ul
				class="lg:items-center tracking-wide flex-col lg:flex-row lg:flex lg:flex-grow"
				:class="showNav ? 'block' : 'hidden'"
				@click="showNav = false"
			>
				<li class="lg:hidden">
					<nuxt-link to="/" class="">Home</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/agencies-partners" class=""
						>For Agencies & Partners</nuxt-link
					>
				</li>
				<li>
					<nuxt-link to="/private-clients" class=""
						>For Private Clients</nuxt-link
					>
				</li>
				<li class="lg:ml-auto relative has-dropdown">
					<nuxt-link to="/services" class="">Services</nuxt-link>
					<ul
						class="dropdown absolute bg-secondary-200 border-4 border-secondary-300 shadow text-primary-100 font-normal"
					>
						<li>
							<nuxt-link
								to="/services/"
								class="py-2 block border-b-2 border-secondary-300"
								>Overview</nuxt-link
							>
						</li>
						<li>
							<nuxt-link
								to="/jurisdictions/"
								class="py-2 block border-b-2 border-secondary-300"
								>Jurisdictions</nuxt-link
							>
						</li>
					</ul>
				</li>
				<li>
					<nuxt-link to="/about" class="">About</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/contact" class="pr-0">Contact</nuxt-link>
				</li>
				<li class="lg:hidden">
					<nuxt-link
						to="/social-responsibilities"
						class="crown__social-responsibility"
						>Social Responsibility</nuxt-link
					>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
import IconValkon from '@/components/icons/icon-valkon'
import IconMark from '@/components/icons/icon-mark'

export default {
	components: { IconValkon, IconMark },
	data() {
		return { showNav: false }
	},
	computed: {
		isLightHeader() {
			return this.$route.name !== 'index'
		},
	},
}
</script>

<style lang="scss">
header.header--light {
	@apply text-secondary-200;
}

header {
	@apply absolute;

	.nav-toggle {
		@apply fixed ml-auto p-6 top-0 right-0;
		z-index: 9999;

		@screen lg {
			@apply hidden;
		}
	}

	> nav {
		&.__showing {
			@apply pt-6 w-screen bg-secondary-200 fixed top-0 left-0 h-screen z-50 text-dark;

			svg {
				@apply text-dark;
			}

			> ul {
				@apply mt-6;

				> li > {
					a {
						@apply pl-0 py-4 border-b border-primary-200 block;
					}
				}
			}
		}
	}
}

nav {
	> ul > li {
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
				@screen lg {
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

		a {
			@screen lg {
				@apply px-5;
			}
		}
	}
}
</style>
