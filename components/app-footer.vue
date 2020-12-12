<template>
	<div>
		<contact v-if="!$route.path.includes('contact-success')" />
		<footer class="bg-secondary-300 lg:pb-40">
			<div class="footer-wrapper">
				<nav class="mt-12 lg:mt-40">
					<ul
						class="flex flex-col lg:flex-row py-8 constrain border-t-2 border-b-2 font-semibold"
					>
						<li>
							<nuxt-link
								to="/private-clients"
								class="py-8 mr-16 pl-0"
								>For Agents & Partners</nuxt-link
							>
						</li>
						<li>
							<nuxt-link to="/private-clients" class="py-8"
								>For Private Clients</nuxt-link
							>
						</li>
						<li class="lg:ml-auto">
							<nuxt-link to="/services" class="py-8 lg:mr-16"
								>Services</nuxt-link
							>
						</li>
						<li>
							<nuxt-link to="/about" class="py-8 mr-16"
								>About</nuxt-link
							>
						</li>
						<li>
							<nuxt-link to="/contact" class="py-8 pr-0"
								>Contact</nuxt-link
							>
						</li>
					</ul>
				</nav>
				<div class="flex flex-col lg:flex-row constrain my-16">
					<div>
						<p class="text-md">Valkon Enterprises Limited</p>
						<p class="lg:hidden">+44 20 8638 6123</p>
						<a class="lg:hidden" href="mailt:hello@valkon.group"
							>hello@valkon.group</a
						>
						<p class="mt-10">
							131/133 Cannon Street, 3rd Floor<br />
							London EC4N 5AX<br />
							United Kingdom
						</p>
					</div>
					<div class="lg:ml-auto lg:text-right text-md">
						<p class="hidden lg:block">+44 20 8638 6123</p>
						<a
							class="hidden lg:block"
							href="mailt:hello@valkon.group"
							>hello@valkon.group</a
						>
						<p class="hidden lg:block mt-12">
							&copy; {{ new Date().getFullYear() }} Valkon
							Enterprises Limited
						</p>
					</div>
				</div>
				<div
					class="lg:mt-20 constrain pb-12 lg:pb-40 flex flex-col lg:flex-row"
				>
					<div class="flex items-center justify-center">
						<IconValkon class="mr-3" />
						<IconMark />
					</div>
					<div class="lg:ml-auto text-md lg:text-lg text-center">
						More than money
					</div>
				</div>
				<p class="lg:hidden mt-4 text-sm my-4 text-center">
					&copy; {{ new Date().getFullYear() }} Valkon Enterprises
					Limited
				</p>
			</div>
		</footer>
	</div>
</template>

<script>
import Contact from '@/components/contact'
import IconValkon from '@/components/icons/icon-valkon'

export default {
	components: { Contact, IconValkon },
}
</script>

<style lang="scss">
.footer-wrapper {
	@apply bg-secondary-200 mx-auto;

	max-width: 1600px;
}
</style>
