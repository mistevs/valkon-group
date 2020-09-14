<template>
	<div class="contact bg-light">
		<div class="flex flex-col lg:flex-row lg:constrain px-0">
			<div
				class="contact-dark bg-primary-200 text-light px-6 py-12 lg:p-40 lg:pl-0 lg:pr-24"
			>
				<h3>Contact Valkon</h3>
				<h2 class="mt-12 lg:mt-24">
					How can we help build your legacy?
				</h2>
				<div class="flex mt-24 lg:mt-64">
					<div class="w-5/12 lg:w-1/2">
						<p class="font-medium">Via Post</p>
						<p class="text-sm">
							Valkon Enterprises Limited
							<br />
							<br />
							<br />
							<br />
							131/133 Cannon St, 3rd Fl<br />
							London EC4N 5AX<br />
							United Kingdom
						</p>
					</div>
					<div class="w-1/2 ml-auto lg:ml-0">
						<p class="font-medium">Via Email</p>
						<p class="text-sm">hello@valkongroup.com</p>
						<p class="font-medium mt-16">Via Telephone</p>
						<p class="text-sm">
							+44 20 8638 6123
							<span class="block pt-2">(WhatsApp + Signal)</span>
						</p>
					</div>
				</div>
				<!-- <div class="mt-16"></div> -->
			</div>
			<div class="py-12 px-6 lg:py-40 lg:px-32 w-full">
				<h3>Hello! Let’s get in touch –</h3>
				<form class="mt-24">
					<input type="text" placeholder="Your Name" />
					<input type="text" placeholder="Your Email" />
					<input type="text" placeholder="Your Company" />
					<textarea
						placeholder="Let us know how can we help?"
					></textarea>
					<s-button class="w-full" text="Submit" type="outline" />
				</form>
			</div>
		</div>
	</div>
</template>

<script>
import SButton from '@/components/button'

export default {
	components: { SButton },
}
</script>

<style lang="scss">
.contact-dark {
	@apply relative;

	@screen lg {
		min-width: 520px;
	}

	&::after {
		@apply absolute top-0 bg-primary-200 h-full;
		content: ' ';

		right: 100%;
		width: 160px;
	}
}

input,
textarea {
	@apply block border px-6 py-4 mb-4 w-full bg-transparent font-body tracking-wide;

	&::placeholder {
		@apply text-primary-100;
	}
}

textarea {
	min-height: 300px;
}
</style>
