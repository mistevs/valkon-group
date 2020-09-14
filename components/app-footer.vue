<template>
	<div>
		<contact />
		<footer class="bg-secondary-300 lg:pb-40">
			<div class="footer-wrapper">
				<nav class="mt-40">
					<ul
						class="flex flex-col lg:flex-row py-8 constrain border-t-2 border-b-2 font-semibold"
					>
						<li>
							<nuxt-link to="/private-clients" class="py-8 mr-16"
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
							<nuxt-link to="/contact" class="py-8"
								>Contact</nuxt-link
							>
						</li>
					</ul>
				</nav>
				<div class="mt-20 constrain pb-40">
					<div class="flex items-center">
						<IconValkon class="mr-3" />
						<IconMark />
					</div>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
import Contact from '@/components/contact'
import IconValkon from '@/components/icons/icon-valkon'
import IconMark from '@/components/icons/icon-mark'

export default {
	components: { Contact, IconValkon, IconMark },
}
</script>

<style lang="scss">
.footer-wrapper {
	@apply bg-secondary-200 mx-auto;

	max-width: 1600px;
}
</style>
